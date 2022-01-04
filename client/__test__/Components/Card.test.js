import React from 'react';
import { Card } from '../../src/components';
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

const mockStore = configureMockStore([thunk]);
const store = mockStore(defaultState);
const history = createMemoryHistory()
//make, model, enginePowerPS, enginePowerKW, fuelType, bodyType, engineCapacity
const wrapper = renderer.create(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Card make={defaultState.vehicles[0].make} model={defaultState.vehicles[0].model} enginePowerPS={defaultState.vehicles[0].enginePowerPS} enginePowerKW={defaultState.vehicles[0].enginePowerKW} fuelType={defaultState.vehicles[0].fuelType} bodyType={defaultState.vehicles[0].bodyType} engineCapacity={defaultState.vehicles[0].engineCapacity} />
            </Switch>

        </Router>

    </Provider>,
);


describe('rendering card components', () => {
    test('it should match with the snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

});