import React from "react";
import { ISearch } from "../../models";

const Search:React.FC<ISearch> = ({search}) => {

    return (
        <div
            className="flex items-center 
      xl:w-2/6 lg:w-2/6 md:w-2/6 sm:w-full xs:w-full 
      xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute ml-6"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                />
            </svg>
            <input
                className="border-none rounded-md text-sm bg-WhiteDark dark:bg-DarkBlue shadow w-full h-full px-16 placeholder-VeryDarkBlueLight dark:placeholder-WhiteDark"
                placeholder="Search for a vehicle fuelType..."
                onChange={event => search(event)}
                data-testid="search-input"
            />
        </div>
    )

}

export default Search;