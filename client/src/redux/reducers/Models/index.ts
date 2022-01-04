import {
    ModelType,
    ModelsDispatchTypes,
    MODELS_SUCCESS,
    MODELS_FAIL,
    MODELS_LOADING,
} from '../../actions/Models/types';


export interface DefaultStateI {
    loading: boolean;
    models?: Array<ModelType>;
    error?: boolean;
}

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const modelsReducer = (
    state: DefaultStateI = defaultState,
    action: ModelsDispatchTypes,
): DefaultStateI => {
    switch (action.type) {
        case MODELS_FAIL:
            return {
                loading: false,
                error: true
            };
        case MODELS_LOADING:
            return {
                loading: true,
            };
        case MODELS_SUCCESS:
            return {
                loading: false,
                models: action.payload,
                
            };
        default:
            return state;
    }
};


export default modelsReducer;
