import React from 'react';
import './style.css';
import {Jumbotron, Container} from 'reactstrap';
import introtext from '../introtext/introtext.js';
import {TweenMax, ease, Expo } from 'gsap-then';

let introtext = introtext;


const Main = (props) => {
return(
  <div>
  <React.Fragment>
  <jumbotron Fluid>
    <Container fluid>
    <introtext>
          <firstText>
                  <div class="scrolling-text st-regular"><span class="copy-repeater">Node.React.Bootstrap.JQuery; Express. Powershell. Azure.SCCM.Developer</span></div>
          </firstText>
          <Secondinverse>
                  <div class="scrolling-text st-inverse"><span class="copy-repeater">Welcome to My Site.My name is Chris and I am a System Engineer. Administrator. Developer.Enthusiast .</span></div>
          </Secondinverse>
          <thirdText>
                  <div class="scrolling-text st-regular"><span class="copy-repeater">Microsoft.Android.MSSql.MySQL.Windows Server.Windows.Azure.Developer</span></div>
          </thirdText>
    </introtext>
    </Container>
    </jumbotron>
    </React.Fragment>
   </div>
  );
};


export default Main;
