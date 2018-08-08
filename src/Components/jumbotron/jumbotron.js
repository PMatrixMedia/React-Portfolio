import React from 'react';
import './style.css';
import {Jumbotron, Container} from 'reactstrap';
import introtext from '../introtext/introtext.js';
import {TweenMax, ease, Expo } from 'gsap-then';

componentDidMount(introtext){

}


const Main = (props) => {
return(
  <div>
  <React.Fragment>
  <jumbotron Fluid>
    <Container fluid>
    <introtext>
                  <div class="scrolling-text st-regular" id="firstText"><span class="copy-repeater">Node.React.Bootstrap.JQuery; Express. Powershell. Azure.SCCM.Developer</span></div>
                  <div class="scrolling-text st-inverse" id="Secondinverse"><span class="copy-repeater">Welcome to My Site.My name is Chris and I am a System Engineer. Administrator. Developer.Enthusiast .</span></div>
                  <div class="scrolling-text st-regular" id ="thirdText"><span class="copy-repeater">Microsoft.Android.MSSql.MySQL.Windows Server.Windows.Azure.Developer</span></div>
    </introtext>
    </Container>
    </jumbotron>
    </React.Fragment>
   </div>
  );
};


export default Main;
