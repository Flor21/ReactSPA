import React from "react";
import Card from "react-bootstrap/Card";

export default class ModalNew extends React.Component {
  render() {
    return (
      <div className="modalNew">
        <Card>
          <Card.Header>
            {" "}
            <h5> Information sent </h5>
          </Card.Header>
          <Card.Body>
            <p>You will have an answer shortly. Thank you for contacting us</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
