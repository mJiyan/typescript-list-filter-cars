import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { MakesDispatchTypes, MAKES_LOADING, MAKES_FAIL, MAKES_SUCCESS, MakeType } from './types';

export const GetMakes = () => async (dispatch: Dispatch<MakesDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: MAKES_LOADING });
    let done: any = false;
    while (done === false) {
      done = await apiCall('makes', null, null, HTTP.GET, {})
        .then((res) => res)
        .catch(() => false);
    }
    const make = {
      makes: done.data
    }
    // if the request return data without error then it updates the state with the response
    dispatch({
      type: MAKES_SUCCESS,
      payload: make,
    });
  } catch (e: any) {
    // if the request failed then it dispatch fail
    dispatch({
      type: MAKES_FAIL,
    });

  }
};



export const SetMake = (make: MakeType) => async (dispatch: Dispatch<MakesDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: MAKES_LOADING });
    // if the request return data without error then it updates the state with the response
    dispatch({
      type: MAKES_SUCCESS,
      payload: make,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: MAKES_FAIL,
    });
  }
};
