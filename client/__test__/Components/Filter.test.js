import React from 'react';
import { Filter } from '../../src/components';
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

const wrapper = renderer.create(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Filter />
            </Switch>
        </Router>
    </Provider>,
);


const wrapperMount = mount(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Filter />
            </Switch>
        </Router>
    </Provider>,
);

describe('rendering filter components', () => {
    test('it should match with the snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('it should find the search box', () => {
        const searchInput = wrapperMount.find('[data-testid="search-input"]');
        expect(searchInput.length).toEqual(1);
    });



});