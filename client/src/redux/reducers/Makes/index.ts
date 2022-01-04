import {
    MakeType,
    MakesDispatchTypes,
    MAKES_SUCCESS,
    MAKES_FAIL,
    MAKES_LOADING,
} from '../../actions/Makes/types';


export interface DefaultStateI {
    loading: boolean;
    make?: MakeType;
    error?: boolean;
}

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const makeReducer = (
    state: DefaultStateI = defaultState,
    action: MakesDispatchTypes,
): DefaultStateI => {
    switch (action.type) {
        case MAKES_FAIL:
            return {
                loading: false,
                error: true
            };
        case MAKES_LOADING:
            return {
                loading: true,
            };
        case MAKES_SUCCESS:
            return {
                loading: false,
                make: action.payload,
            };
        default:
            return state;
    }
};


export default makeReducer;
