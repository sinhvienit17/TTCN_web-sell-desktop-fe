import React from "react";
import { Header, Footer } from "./components";
import Signin from "./page/Sign/Signin";
import Signup from "./page/Sign/Signup";
import { Home, Product, About } from "./page";
import "./App.module.css";
import { Col, Row } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Row>
        <Col span={24}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Col>
      </Row>
    </Router>
  );
};

export default App;
