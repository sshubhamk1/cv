import React from "react";
import { Jumbotron, Container } from "reactstrap";

class Jumbo extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">{this.props.title}</h1>
            <p className="lead">{this.props.description}</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default Jumbo;
