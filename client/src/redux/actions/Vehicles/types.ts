export const VEHICLES_FAIL = 'VEHICLES_FAIL';
export const VEHICLES_SUCCESS = 'VEHICLES_SUCCESS';
export const VEHICLES_LOADING = 'VEHICLES_LOADING';

// declared all Country types here and exported them. in order to enable to reach them easily
export type VehicleType = {
  make: string,
  model: string,
  enginePowerPS: number,
  enginePowerKW: number,
  fuelType: string,
  bodyType: string,
  engineCapacity: number

};

interface VehiclesLoading {
  type: typeof VEHICLES_LOADING;
}

interface VehiclesFail {
  type: typeof VEHICLES_FAIL;
}

interface VehiclesSuccess {
  type: typeof VEHICLES_SUCCESS;
  payload: Array<VehicleType>;
}


export type VehicleDispatchTypes = VehiclesLoading | VehiclesFail | VehiclesSuccess;
