import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import '../setupTests';

import Nav from '../components/ui/Nav';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

afterEach(() => {
    wrapped.unmount()
})

it('Should render the NAV Component', () => {
    expect(wrapped.find(Nav).length).toEqual(1);
})

it('Should render all of the Routes', () => {
    expect(wrapped.find(Route).length).toEqual(13);
})
