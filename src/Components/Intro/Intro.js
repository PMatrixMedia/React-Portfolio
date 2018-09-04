import React, { Component } from "react";
import { Parallax } from "react-spring";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link,  } from "react-router-dom";
import "./Intro.css";



const Page = ({offset, caption, first, second, gradient, onDoubleClick }) => (

    <React.Fragment>
        <Parallax.Layer offset={offset} speed={0.2} onDoubleClick={onDoubleClick}>
          <div className="slopeBegin" />
        </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onDoubleClick={onDoubleClick}>
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
    <Parallax.Layer className="sitebutton1" offset={offset} speed={0.4}>
      <div>
       </div>
    </Parallax.Layer>
    <Parallax.Layer className="sitebutton2" offset={offset} speed={0.4}>
      <div>
      </div>
    </Parallax.Layer>
    <Parallax.Layer className="sitebutton3" offset={offset} speed={0.4}>
      <div>
      </div>
    </Parallax.Layer>
  </React.Fragment>
);




export default class Intro extends Component {
  constructor(props) {
    super();
  }
  scroll = to => this.refs.parallax.scrollTo(to);

  
  

  render() {
  return (
      <Router>
        <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
                    <Page offset={0} gradient="pink" caption="PhaseMatrix Media" first="Double Click Slope to Scroll" second="Buttons Give You Access to the Site"  onDoubleClick={() => this.scroll(1)}/>
                        <div className="sitebutton1">
                          <Button color="danger" size="lg">Enter</Button>
                        </div>

                    <Page offset={1} gradient="teal" caption="All things VR" first="VR & AR" onDoubleClick={() => this.scroll(2)}/>
                        <div className="sitebutton2">
                            <Button color="primary" size="lg">Enter</Button>
                        </div>
       
                    <Page offset={2} gradient="tomato" caption="Who I am" first="Portfolio" second="" onDoubleClick={() => this.scroll(0)}/>
                        <div className="sitebutton3">
                            <Button onClick={() => this.Portenter} color="warning" size="lg"><Link to={'/about'}>Enter</Link></Button>
                        </div>
        </Parallax>
      </Router>
    );
  }
}





