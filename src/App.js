import { Component } from "react";

import { Header } from './Header';

import { Home } from "./Home";

import { About } from "./About";

import { Contact } from './Contact';

import { Footer } from "./Footer";


export class App extends Component {
  state = {};


  render() {
    return (
      <>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
      </>
    )
  }
}
