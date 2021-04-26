import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import  Index  from "./pages/Index";
import Contact from "./pages/Contact";
import  Company from "./pages/Company";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Layout  from "./components/Layout";
// import {Index} from './pages/Index';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/contact-us" component={Contact} />
              <Route exact path="/company" component={Company} />
            </Switch>
          </Layout>
        </Router>
      </Fragment>
    );
  }
}

export default App;
