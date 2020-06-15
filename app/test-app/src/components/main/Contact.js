import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import ModalNew from "./ModalNew";
import Alert from "react-bootstrap/Alert";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: "",
      name: "",
      phone: "",
      email: "",
      msj: "",
      showComponent: false,
      alert: false,
      errors: {
        surname: "",
        name: "",
        phone: "",
        email: "",
        msj: "",
      },
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "surname":
        errors.surname = /^[A-Za-z\s]+$/.test(value)
          ? ""
          : "The name field must not contain number or special characters";
        break;
      case "name":
        errors.name = /^[A-Za-z\s]+$/.test(value)
          ? ""
          : "The name field must not contain number or special characters";
        break;
      case "phone":
        errors.phone =
          Number.isInteger(parseInt(value)) &&
          (parseInt(value).toString().length === 9 ||
            parseInt(value).toString().length === 10) &&
          parseInt(value).toString().length === value.length
            ? ""
            : "Phone is not valid!";
        break;
      case "email":
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ""
          : "Email is not valid!";
        break;
      case "msj":
        errors.msj = value.length < 5 ? "Message is not valid!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      //console.log("e", errors);
    });
  };

  active() {
    if (
      this.state.surname !== "" &&
      this.state.name !== "" &&
      this.state.phone !== "" &&
      this.state.email !== "" &&
      this.state.msj !== "" &&
      this.state.errors.surname === "" &&
      this.state.errors.name === "" &&
      this.state.errors.phone === "" &&
      this.state.errors.email === "" &&
      this.state.errors.msj === ""
    ) {
      this.setState({ showComponent: true });
    } else {
      this.setState({ alert: true });
    }
  }

  submit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="contact">
        <Card>
          <Card.Header>
            {" "}
            <h6> Contact information </h6>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.submit}>
              {this.state.showComponent ? (
                <ModalNew />
              ) : (
                <>
                  {this.state.alert ? (
                    <Alert variant="danger">
                      You must complete all the fields.
                    </Alert>
                  ) : (
                    ""
                  )}

                  <Form.Group as={Row} controlId="formHorizontalSurname">
                    <Form.Label column sm={2}>
                      Surname:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        value={this.state.surname}
                        name="surname"
                        onChange={this.change}
                      />
                    </Col>
                    {this.state.errors.surname.length > 0 && (
                      <span className="errorSurname">
                        {this.state.errors.surname}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                      Name:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        name="name"
                        value={this.state.name}
                        onChange={this.change}
                      />
                    </Col>
                    {this.state.errors.name.length > 0 && (
                      <span className="errorName">
                        {this.state.errors.name}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Phone:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        name="phone"
                        value={this.state.phone}
                        onChange={this.change}
                      />
                    </Col>
                    {this.state.errors.phone.length > 0 && (
                      <span className="error">{this.state.errors.phone}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email:
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        name="email"
                        value={this.state.email}
                        onChange={this.change}
                      />
                    </Col>
                    {this.state.errors.email.length > 0 && (
                      <span className="error">{this.state.errors.email}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalMsj">
                    <Form.Label column sm={2}>
                      Message:
                    </Form.Label>
                    <Col sm={10}>
                      <textarea
                        name="msj"
                        value={this.state.msj}
                        onChange={this.change}
                      ></textarea>
                    </Col>
                    {this.state.errors.msj.length > 0 && (
                      <span className="errorMsj">{this.state.errors.msj}</span>
                    )}
                  </Form.Group>

                  <Button variant="success" onClick={this.active.bind(this)}>
                    Send
                  </Button>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
