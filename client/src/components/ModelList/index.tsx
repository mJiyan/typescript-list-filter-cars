import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModelType } from '../../redux/actions/Models/types';
import { RootStore } from '../../Store';
import * as vehicleActions from '../../redux/actions/Vehicles';


const ModelList = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [title, setTitle] = useState<ModelType>();

    const toggleModelFilter = () => {
        setIsModelOpen((c) => !c);
    };

    const dispatch = useDispatch();
    const modelState = useSelector((state: RootStore) => state.models);
    const makeState = useSelector((state: RootStore) => state.make);

    const selectAModel = (item: ModelType) => {
        dispatch(vehicleActions.GetVehicles(makeState.make, item));
        setTitle(item)
        toggleModelFilter();
    }

    return (
        <div
            className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-2/3 xs:w-2/3 
      xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12
      xl:my-0 lg:my-0 md:my-0 sm:my-10 xs:my-10"
        >
            <button
                className="flex items-center justify-between border-none shadow rounded-md w-full h-full text-sm px-6 bg-WhiteDark dark:bg-DarkBlue "
                onClick={toggleModelFilter}
                data-testid="toggle-model-list"
            >
                {title !== undefined ? title : 'Select a Model'}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isModelOpen && (
                <div
                    className="flex flex-row 
      border-none shadow rounded-md 
      bg-WhiteDark dark:bg-DarkBlue text-VeryDarkBlueLight dark:text-VeryLightGray 
      h-44 mt-1 py-3 pl-5 text-sm
      xl:w-full lg:w-full md:w-full sm:w-full xs:w-full 
      xl:relative lg:relative md:relative sm:relative xs:relative overflow-auto"
                >
                    <ul className='overflow-auto w-full'>
                        {modelState.models && modelState.models.map((item) => { return <li className='cursor-pointer' onClick={() => { selectAModel(item) }} data-testid={`model-filter-${item}`} >{item}</li> })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ModelList;