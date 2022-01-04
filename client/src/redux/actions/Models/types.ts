export const MODELS_LOADING = 'MODELS_LOADING';
export const MODELS_FAIL = 'MODELS_FAIL';
export const MODELS_SUCCESS = 'MODELS_SUCCESS';

// declared all Model types here and exported them. in order to enable to reach them easily
export type ModelType = {
  model: string;
};

interface ModelLoading {
  type: typeof MODELS_LOADING;
}

interface ModelFail {
  type: typeof MODELS_FAIL;
}

interface ModelsSuccess {
  type: typeof MODELS_SUCCESS;
  payload: Array<ModelType>;
}



export type ModelsDispatchTypes = ModelLoading | ModelFail | ModelsSuccess;
