import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '.';

it('Home', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        ,);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
