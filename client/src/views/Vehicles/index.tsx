import { useEffect, useState, ChangeEvent } from 'react';
import { Filter, CardList } from '../../components'
import { useSelector } from 'react-redux';

import { RootStore } from '../../Store';
import { VehicleType } from '../../redux/actions/Vehicles/types';

const Vehicles = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [vehichleStates, setVehichleStates] = useState<VehicleType[]>();

    const vehichleState = useSelector((state: RootStore) => state.vehicle);

    const search = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        let filteredVehicles: Array<VehicleType> | undefined = vehichleState.vehicles?.filter((val) => {
            if (searchTerm == '') {
                return vehichleState.vehicles;
            } else if (
                val.fuelType.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return vehichleState.vehicles;
            }
        });
        setVehichleStates(filteredVehicles)
    }, [searchTerm]);
    return (
        <>
            <Filter search={search} />
            {<CardList cards={vehichleStates ?? vehichleState.vehicles} />}
        </>

    )
}

export default Vehicles;