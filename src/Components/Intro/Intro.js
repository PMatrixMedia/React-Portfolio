import React, { Component } from "react";
import { Parallax } from "react-spring";
import { Button } from "reactstrap";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReactDOM from "react-dom";
import "./Intro.css";

const Page = ({
  offset,
  caption,
  first,
  second,
  gradient,
  onClick,
  button,
  BtnClick
}) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p />
        <p style={{ fontsize: 20 }}>{first}</p>
        <p />
        <p style={{ fontsize: 10 }}>{second}</p>
      </span>
    </Parallax.Layer>
    <Parallax.Layer
      className="sitebutton1"
      offset={offset}
      speed={0.4}
      BtnClick={onClick}
    >
      <div />
    </Parallax.Layer>
    <Parallax.Layer
      className="sitebutton2"
      offset={offset}
      speed={0.4}
      BtnClick={onClick}
    >
      <div />
    </Parallax.Layer>
    <Parallax.Layer
      className="sitebutton3"
      offset={offset}
      speed={0.4}
      BtnClick={onClick}
    >
      <div />
    </Parallax.Layer>
  </React.Fragment>
);

export default class Intro extends Component {
  constructor(props) {
    super();
  }
  scroll = to => this.refs.parallax.scrollTo(to);
  vr = to => this.link;
  render() {
    return (
      <Router>
        <Parallax
          className="container"
          ref="parallax"
          pages={3}
          horizontal
          scrolling={false}
        >
          <Route exact path="/projects" />
          <Route exact path="/contact" />
          <Route exact path="/" />
          <Page
            offset={0}
            gradient="pink"
            caption="PhaseMatrix Media"
            first="Click Slope to Scroll"
            second="Buttons Give You Access"
            onClick={() => this.scroll(1)}
          />
          <div className="sitebutton1">
            <Button color="danger" size="lg">
              Enter
            </Button>
          </div>

          <Route exact path="/VR" component="Navbar" />
          <Page
            offset={1}
            gradient="teal"
            caption="All things VR"
            first="VR & AR"
            onClick={() => this.scroll(2)}
            BtnClick={() => this.link(<Navbar />)}
          />
          <div className="sitebutton2">
            <Button color="primary" size="lg">
              Enter
            </Button>
          </div>
          <Route exact path="/about" component={Navbar} />
          <Page
            offset={2}
            gradient="tomato"
            caption="Who I am"
            first="Portfolio"
            second=""
            onClick={() => this.scroll(0)}
          />
          <div className="sitebutton3">
            <Button color="warning" size="lg">
              Enter
            </Button>
          </div>
        </Parallax>
      </Router>
    );
  }
}

export class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return <div />;
  }
}

ReactDOM.render(<Intro />, document.getElementById("root"));
