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
                <Media left className="avatar" href={img}>
                <Media className='profile-image' object src={'https://www.dropbox.com/s/0m7tw5d31hopcsh/avatar.jpg?dl=0'} alt={img} />
            </Media>
            <Media heading className='bodyheading'>About Me</Media>
              <br>
              </br>
            <Media body className='bodytext'>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
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