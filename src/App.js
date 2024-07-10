import { Component } from "react";

import { Home } from "./Home";

import { About } from "./About";
import { Contact } from './Contact';


export class App extends Component {
  state = {};


  render() {
    return (
      <>
      <Home/>
      <About/>
      <Contact/>
      </>
    )
  }
}
