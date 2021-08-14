import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./home/Home";
// Employee Components
import List from "./employee/List";
import Create from "./employee/Create";
import Edit from "./employee/Edit";

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/employee/list" exact component={List} />
                <Route path="/employee/create" exact component={Create} />
                <Route path="/employee/edit" exact component={Edit} />
            </Switch>
        </BrowserRouter>
    );
};

export default Main;

ReactDOM.render(<Main />, document.getElementById("app"));
