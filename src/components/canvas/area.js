import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from '../sections/about';
import Experience from '../sections/experience';
import Education from '../sections/education';
import Projects from '../sections/projects';
import Skills from '../sections/skills';
import Contact from '../sections/contact';
import Blog from '../sections/blog';


export default function CanvasArea(){

    return(
      
        <Switch>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <About />
          </Route>
        </Switch>
      
    );
}
