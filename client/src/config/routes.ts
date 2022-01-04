import { Vehicles } from '../views';
import { IRoute } from '../models';

const routes: IRoute[] = [
    { path: '/', name: "Vehicle List Page", component: Vehicles, exact: true },
];

export default routes;