import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomeSection from "./components/HomeSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Wireframe from "./components/projects/Wireframe";
import Ui_ux from "./components/projects/Ui_ux";
import Reactjs from "./components/projects/Reactjs";
import Jquery from "./components/projects/Jquery";
import Javascript from "./components/projects/Javascript";
import Front from "./components/projects/Front";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <ScrollToTop>
            <Route
              render={({ location }) => (
                <Switch>
                  <Route path="/" exact component={HomeSection} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/projects/wireframe" component={Wireframe} />
                  <Route path="/projects/ui_ux" component={Ui_ux} />
                  <Route path="/projects/react" component={Reactjs} />
                  <Route path="/projects/jquery" component={Jquery} />
                  <Route path="/projects/javascript" component={Javascript} />
                  <Route path="/projects/front" component={Front} />
                </Switch>
              )}
            />
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
