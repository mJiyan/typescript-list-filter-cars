import React from 'react';
import { ICard } from '../../models';
import { Link } from 'react-router-dom';


const Card: React.FC<ICard> = ({ make, model, enginePowerPS, enginePowerKW, fuelType, bodyType, engineCapacity }) => {


  return (
    <div
      className="rounded-md overflow-hidden shadow-lg bg-WhiteDark dark:bg-DarkBlue h-96 w-80 cursor-pointer
                xl:mb-20 lg:mb-20 md:mb-20 sm:mb-10 xl:mb-10"
    >
      <>
        <img className="object-cover w-full h-44" src="https://cdn.dribbble.com/users/1111447/screenshots/7697273/rent_a_car_logo.png" />
        <div className="flex flex-col items-start justify-start h-full p-8">
          <p className="text-orange-600 text-lg pb-4 font-bold"> {make + ' ' + model}</p>
          <div className="flex flex-col items-start justify-end">
            <p className="text-base">
              <span className='font-normal'>enginePowerPS: </span> {enginePowerPS}
            </p>
            <p className="text-base">
              <span className='font-normal'>enginePowerKW: </span> {enginePowerKW}
            </p>
            <p className="text-base">
              <span className='font-normal'>fuelType: </span> {fuelType}
            </p>
            <p className="text-base">
              <span className='font-normal'>bodyType: </span> {bodyType}
            </p>
            <p className="text-base">
              <span className='font-normal'>engineCapacity: </span> {engineCapacity}
            </p>
          </div>
        </div>
      </>
      </div>
  );
};

export default Card;
