import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Pictures extends React.Component {
  render() {
    return (
      <div className="pictures">
        <Carousel>
          <Carousel.Item>
            <img
              className="m"
              src="../img/jasmine.jpg"
              alt="First slide"
              width={800}
              height={650}
            />
            <Carousel.Caption>
              <p>Jasmine</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m1"
              src="../img/lavender.jpg"
              alt="Second slide"
              width={800}
              height={650}
            />
            <Carousel.Caption>
              <p>Lavender</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/lily.jpg"
              alt="Third slide"
              width={800}
              height={650}
            />
            <Carousel.Caption>
              <p>Lily</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/pansy.jpg"
              alt="Quarter slide"
              width={700}
              height={650}
            />
            <Carousel.Caption>
              <p>Pansy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/plumeria.jpg"
              alt="Fifth slide"
              width={800}
              height={650}
            />
            <Carousel.Caption>
              <p>Plumeria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/rose.jpg"
              alt="Sixth slide"
              height={650}
            />
            <Carousel.Caption>
              <p>Rose</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/sunflower.jpg"
              alt="Seventh slide"
              height={650}
            />
            <Carousel.Caption>
              <p>Sunflower</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m"
              src="../img/zinnia.jpg"
              alt="Eighth slide"
              height={650}
            />
            <Carousel.Caption>
              <p>Zinnia</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
