import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as actions from '../../redux/actions/Makes';
import { IFilter } from '../../models';
import { MakeList, ModelList, Search } from '..';

const Filter: React.FC<IFilter> = ({ search }) => {
  const makeState = useSelector((state: RootStore) => state.make);
  const modelState = useSelector((state: RootStore) => state.models);

  return (
    <div
      className="flex 
                    xl:flex-row lg:flex-row  md:flex-row sm:flex-col xs:flex-col 
                    justify-between 
                    xl:px-20 lg:px-20 md:px-20 sm:px-3 xs:px-3
                    xl:pt-8 lg:pt-8 md:pt-8 sm:pt-5 xs:pt-5
                    xl:h-20 lg:h-20 md:h-20 sm:h-full xs:h-full"
    >

      <MakeList />
      {modelState.models && <ModelList />}

      <Search search={search} />
    </div>
  );
};

export default Filter;
