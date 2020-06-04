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
    if (
      this.state.name !== "" &&
      this.state.price !== "" &&
      this.state.stock !== ""
    ) {
      const totalContentPrice = this.state.price.length;
      const contentPrice = this.state.price.toString();
      const price = contentPrice.substr(0, totalContentPrice - 1);

      const totalContentStock = this.state.stock.length;
      const contentStock = this.state.stock.toString();
      const stock = contentStock.substr(0, totalContentStock);

      const contentName = this.state.name;
      const name = /^[A-Za-z\s]+$/.test(contentName);
      if (name) {
        if (contentPrice[totalContentPrice - 1] === "$") {
          if (isNaN(price) || isNaN(stock)) {
            alert("The price field and the stock field must be a number");
          } else {
            this.props.addFlower(
              this.state.name,
              this.state.price,
              this.state.stock
            );
          }
        } else {
          alert("The price field must end with the $ sign");
        }
      } else {
        alert("The name field must not contain number or special characters");
      }
    } else {
      alert("All fields are required");
    }
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
