import { Component } from "react";

import { Header } from './Header';

import { Home } from "./Home";

import { Skills } from "./Skills";

import { About } from "./About";

import { Projects } from './Projects';

import { Contact } from './Contact';

import { Footer } from "./Footer";




export class App extends Component {
  state = {};


  render() {
    return (
      <>
      <Header/>
      <Home/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
    )
  }
}
