import {
    VehicleType,
    VehicleDispatchTypes,
    VEHICLES_SUCCESS,
    VEHICLES_FAIL,
    VEHICLES_LOADING,
} from '../../actions/Vehicles/types';


export interface DefaultStateI {
    loading: boolean;
    vehicles?: Array<VehicleType>;
    error?: boolean;
}

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const vehicleReducer = (
    state: DefaultStateI = defaultState,
    action: VehicleDispatchTypes,
): DefaultStateI => {
    switch (action.type) {
        case VEHICLES_FAIL:
            return {
                loading: false,
                error: true
            };
        case VEHICLES_LOADING:
            return {
                loading: true,
            };
        case VEHICLES_SUCCESS:
            return {
                loading: false,
                vehicles: action.payload,
            };
        default:
            return state;
    }
};


export default vehicleReducer;
