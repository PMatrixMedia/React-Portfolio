import RSnavbar from '../../Components/RSnavbar/RSnavbar';
import { Jumbotron, Container, Media } from "reactstrap";
import "./style.css";

const About = () => {
    return (
      <div>
        <RSnavbar className="Nav" />
        <Jumbotron fluid className="Jumbotron">
          <Container fluid className="container">
            <Media>
              <Media left href="#">
                <Media object data-src="" alt="selfimage" />
              </Media>
              <Media body>
                <Media heading>About Me</Media>
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


export default About;