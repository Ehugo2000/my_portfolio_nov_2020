import React from 'react';
import Hello from './Hello';
import Header from './Header';
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Cv from "./Cv";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Hello}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/Cv" component={Cv}></Route>
      <Hello/>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;