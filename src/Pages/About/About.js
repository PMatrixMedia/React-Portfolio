import React, { Component } from 'react';
import RSnavbar from '../../Components/RSnavbar/RSnavbar';
import { Jumbotron, Container, Media } from "reactstrap";
import "./style.css";
import ReactDOM from 'react-dom';
import img from './avatar.jpg'

 class About extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <RSnavbar className="Nav" />
        <Jumbotron fluid className="Jumbotron">
          <Container fluid className="container">
            <Media>
                <Media left className="avatar" href={'/static/media/avatar.jpg'}>
                <Media className='profile-image' object src={img} alt={img} />
            </Media>
            <Media heading className='bodyheading'>About Me</Media>
              <br>
              </br>
            <Media body className='bodytext'>
            I am a full-stack web developer with experience in both React and Angular. Major technologies I've used include, but not exclusive to Powershell, HTML5, CSS3, JavaScript, jQuery, Node, Express, MySQL, MongoDB, Mongoose, and Handlebars.
            I also have a very extensive background in windows based administration and SCCM.
            </Media>
            </Media>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}


  ReactDOM.render(<About />, document.getElementById("root"));

export default About;