import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { ModelsDispatchTypes, MODELS_LOADING, MODELS_FAIL, MODELS_SUCCESS } from './types';
import { MakeType } from '../Makes/types';

export const GetModels = (make: string) => async (dispatch: Dispatch<ModelsDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: MODELS_LOADING });
    let done: any = false;
    while (done === false) {
      done = await apiCall(`models?make=${make}`, null, null, HTTP.GET, {})
        .then((res) => res)
        .catch(() => false);
    }

    // if the request return data without error then it updates the state with the response
    dispatch({
      type: MODELS_SUCCESS,
      payload: done.data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: MODELS_FAIL,
    });
  }
};
