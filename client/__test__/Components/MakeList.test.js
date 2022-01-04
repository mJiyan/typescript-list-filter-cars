import React from 'react';
import { MakeList } from '../../src/components';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history'

import defaultState from '../Mock/defaultState';
import toJson from 'enzyme-to-json'; //added this line
import 'jsdom-global/register'; //at the top of file , even  , before importing react


const initialState = {
    make: {
        loading: false,
        make: {
            makes: [
                "ALFA ROMEO",
                "AUDI",
                "AUSTIN",
                "BARKAS",
                "BMW",
                "CADILLAC",
                "CHEVROLET",
                "CHRYSLER",
                "CITROEN",
                "CORVETTE",
                "DACIA",
                "DAEWOO",
                "DAF",
                "DAIHATSU",
                "DODGE",
                "FIAT",
                "FORD",
                "HDPIC",
                "HONDA",
                "HYUNDAI",
                "INFINITI",
                "ISUZU",
                "IVECO",
                "JAGUAR",
                "JEEP",
                "KIA",
                "LADA",
                "LANCIA",
                "LAND ROVER",
                "LANDWIND",
                "LDV",
                "LEXUS",
                "MAZDA",
                "MERCEDES-BENZ",
                "MG",
                "MINI (BMW)",
                "MINI (ROVER)",
                "MITSUBISHI",
                "NISSAN",
                "OPEL",
                "PEUGEOT",
                "PONTIAC",
                "PORSCHE",
                "PROTON",
                "RENAULT",
                "ROVER",
                "SAAB",
                "SEAT",
                "SKODA",
                "SMART",
                "SSANGYONG",
                "SUBARU",
                "SUZUKI",
                "TALBOT",
                "TATA",
                "TESLA",
                "TOYOTA",
                "VOLVO",
                "VW"
            ]
        }
    }

}
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);
const history = createMemoryHistory()



const wrapper = renderer.create(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <MakeList />
            </Switch>
        </Router>
    </Provider>,
);

const wrapperMount = mount(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <MakeList />
            </Switch>
        </Router>
    </Provider>,
);



describe('rendering makelist components', () => {
    test('it should match with the snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('it should open the make list', () => {
        const toggleListButton = wrapperMount.find('[data-testid="toggle-make-list"]');
        console.log(toJson(toggleListButton))
        const makeFilterFord = wrapperMount.find('[data-testid="makes-filter-FORD"]');


        expect(makeFilterFord.length).toEqual(0);

        toggleListButton.simulate('click');
        const makeFilterFord2 = wrapperMount.find('[data-testid="makes-filter-FORD"]');

        expect(makeFilterFord2.length).toEqual(1);
    });


    test('it should change the title', () => {
        const makeFilterFord = wrapperMount.find('[data-testid="makes-filter-FORD"]');
        const toggleListButton = wrapperMount.find('[data-testid="toggle-make-list"]');


        expect(toJson(toggleListButton).node.rendered[0]).toEqual('Select a Make');
        makeFilterFord.simulate('click');

        const toggleListButton2 = wrapperMount.find('[data-testid="toggle-make-list"]');
        expect(toJson(toggleListButton2).node.rendered[0]).toEqual('FORD');
    });

});