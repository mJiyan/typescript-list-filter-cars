import React from 'react';
import { Search } from '../../src/components';
import { mount, shallow, render } from 'enzyme';
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

const search = (searchTerm) => {
    return searchTerm;
}


const wrapper = renderer.create(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Search search={search} />
            </Switch>
        </Router>
    </Provider>,
);

const wrapperMount = mount(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Search search={search} />
            </Switch>
        </Router>
    </Provider>,
);


describe('rendering search components', () => {
    test('it should match with the snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // test('it should change the search box value', () => {
    //     const input = wrapperMount.find('[data-testid="search-input"]');
    //     input.props('onChange', { target: { value: 'Changed' } })
    //     expect(input.get(0).value).toEqual('Changed');
    // });
});


