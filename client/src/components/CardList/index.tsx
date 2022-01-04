import React from 'react';
import { ICardList } from '../../models';
import Card from '../Card';

const CardList: React.FC<ICardList> = ({ cards }) => {
  return (
    <div
      className="
        grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-2  sm:grid-cols-1  xs:grid-cols-1 justify-items-center 
        xl:pt-10 lg:pt-10 md:pt-10 sm:pt-0 xs:pt-0 px-10 
    "
    >
      {cards &&
        cards.map((item, key) => (
          <Card
            key={key}
            make={item.make} 
            model={item.model}
            enginePowerPS={item.enginePowerPS}
            enginePowerKW={item.enginePowerKW}
            fuelType={item.fuelType} 
            bodyType={item.bodyType}
            engineCapacity={item.engineCapacity}
          />
        ))}
    </div>
  );
};

export default CardList;
