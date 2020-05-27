import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default class Flowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      stock: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  newFlower = (e) => {
    this.props.addFlower(this.state.name, this.state.price, this.state.stock);
  };

  render() {
    return (
      <div className="new">
        <Form>
          <Row>
            <Col md="auto">
              <Form.Control
                name="name"
                placeholder="Name flower"
                value={this.state.name}
                onChange={this.onChange}
              />
            </Col>
            <Col md="auto">
              <Form.Control
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.onChange}
              />
            </Col>
            <Col md="auto">
              <Form.Control
                name="stock"
                placeholder="Stock"
                value={this.state.stock}
                onChange={this.onChange}
              />
            </Col>
            <Button variant="outline-success" onClick={this.newFlower}>
              Save
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}
