import { createRoutesFromElements, Route, RouteObject } from 'react-router';
import React from 'react';
import Home from '@Views/Home';
import Page1 from '@Views/Page1';
import Page2 from '@Views/Page2';

const routes: RouteObject[] = createRoutesFromElements(
    <Route path="/" element={<Home />}>
        <Route path="/page1/:p1/:p2" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
    </Route>
);

export default routes;
