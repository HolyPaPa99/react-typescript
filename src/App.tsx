import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import routes from "@Views/Routes";
import withMobx from "@ViewModels/index";
import withIntl from "@Common/Intl";

@withMobx
@withIntl
class App extends React.PureComponent {
    render() {
        return (<RouterProvider router={createBrowserRouter(routes)} />)
    }
}

export default App;