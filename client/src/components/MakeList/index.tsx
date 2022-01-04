import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as actions from '../../redux/actions/Makes';
import * as modelActions from '../../redux/actions/Models';
import { MakeType } from '../../redux/actions/Makes/types';


const MakeList = () => {
    const [isMakeOpen, setIsMakeOpen] = useState(false);
    const [title, setTitle] = useState<string>();
    const dispatch = useDispatch();
    const makeState = useSelector((state: RootStore) => state.make);
    const loading = useRef(false);

    useEffect(() => {
        dispatch(actions.GetMakes());
        loading.current = makeState.loading;
    }, [loading.current]);


    const toggleMakeFilter = () => setIsMakeOpen((c) => !c);
    const selectAMake = (item: string) => {
        const make: MakeType = {
            makes: makeState.make?.makes,
            make: item
        }
        dispatch(modelActions.GetModels(item));
        dispatch(actions.SetMake(make));
        setTitle(item)
        toggleMakeFilter();
    }
    return (
        <div
            className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-2/3 xs:w-2/3 
      xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12
      xl:my-0 lg:my-0 md:my-0 sm:my-10 xs:my-10"
        >
            <button
                className="flex items-center justify-between border-none shadow rounded-md w-full h-full text-sm px-6 bg-WhiteDark dark:bg-DarkBlue "
                onClick={toggleMakeFilter}
                data-testid="toggle-make-list"
            >
                {title !== undefined ? title : 'Select a Make'}
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
            {isMakeOpen && (
                <div
                    className="flex flex-row 
          border-none shadow rounded-md 
          bg-WhiteDark dark:bg-DarkBlue text-VeryDarkBlueLight dark:text-VeryLightGray 
          h-44 mt-1 py-3 pl-5 text-sm
          xl:w-full lg:w-full md:w-full sm:w-full xs:w-full 
          xl:relative lg:relative md:relative sm:relative xs:relative overflow-auto"
                >
                    <ul className='overflow-auto w-full'>
                        {makeState.make?.makes && makeState.make.makes.map((item) => { return <li className='cursor-pointer' key={item} onClick={() => { selectAMake(item) }} data-testid={`makes-filter-${item}`} >{item}</li> })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MakeList;