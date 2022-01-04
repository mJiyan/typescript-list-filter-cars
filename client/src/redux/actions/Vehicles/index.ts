import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { VehicleDispatchTypes, VEHICLES_FAIL, VEHICLES_LOADING, VEHICLES_SUCCESS } from './types';
import { MakeType } from '../Makes/types';
import { ModelType } from '../Models/types';

export const GetVehicles = (make?: MakeType, model?: ModelType) => async (dispatch: Dispatch<VehicleDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: VEHICLES_LOADING });
    let done: any = false;
    while (done === false) {
      done = await apiCall(`vehicles?make=${make}&model=${model}`, null, null, HTTP.GET, {})
        .then((res) => res)
        .catch(() => false);
    }

    // if the request return data without error then it updates the state with the response
    dispatch({
      type: VEHICLES_SUCCESS,
      payload: done.data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: VEHICLES_FAIL,
    });
  }
};
