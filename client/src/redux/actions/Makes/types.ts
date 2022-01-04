export const MAKES_LOADING = 'MAKES_LOADING';
export const MAKES_FAIL = 'MAKES_FAIL';
export const MAKES_SUCCESS = 'MAKES_SUCCESS';

// declared all Make types here and exported them. in order to enable to reach them easily
export type MakeType = {
  make?: string
  makes?: string[]
};


interface MakeLoading {
  type: typeof MAKES_LOADING;
}

interface MakeFail {
  type: typeof MAKES_FAIL;
}

interface MakesSuccess {
  type: typeof MAKES_SUCCESS;
  payload: MakeType
}





export type MakesDispatchTypes = MakeLoading | MakeFail | MakesSuccess ;
