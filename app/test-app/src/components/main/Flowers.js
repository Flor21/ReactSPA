import React from "react";
import Flower from "./Flower";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import listflowers from "../listFlowers.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlowerForm from "./FlowerForm";

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class Flowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: listflowers,
      new: true,
      term: "",
    };
  }

  updateSearch(event) {
    this.setState({ term: event.target.value });
  }

  delete(id) {
    const newFlower = this.state.flowers.filter((flowerr) => flowerr.id !== id);
    this.setState({ flowers: newFlower });
  }

  addFlower = (name, price, stock) => {
    const newFlower = {
      name: name,
      price: price,
      stock: stock,
      id: this.state.flowers.length + 1,
    };
    this.setState({
      flowers: [...this.state.flowers, newFlower],
    });
  };

  newForm() {
    this.setState({ new: false });
  }

  render() {
    let filterFlower = this.state.flowers.filter(searchingFor(this.state.term));
    return (
      <div className="flowers">
        <br></br>
        {this.state.new ? (
          <div className="searchAdd">
            <Container>
              <Row className="justify-content-md-center">
                <Col>
                  <Button
                    variant="outline-info"
                    onClick={this.newForm.bind(this)}
                  >
                    Add
                  </Button>
                </Col>
                <Col md="auto"></Col>
                <Col md="auto">
                  <div>
                    <InputGroup className="mb-3" value={this.state.flowers}>
                      <FormControl
                        placeholder="Search name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.updateSearch.bind(this)}
                        value={this.state.term}
                      />
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <FlowerForm addFlower={this.addFlower} />
        )}
        <br></br>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          {filterFlower.map((flower) => {
            return (
              <Flower
                flower={flower}
                key={flower.id}
                delete={this.delete.bind(this)}
              />
            );
          })}
          {console.log(this.state.flowers)}
        </Table>
      </div>
    );
  }
}
