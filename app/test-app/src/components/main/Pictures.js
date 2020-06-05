import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Pictures extends React.Component {
  render() {
    return (
      <div className="pictures">
        <Carousel>
          <Carousel.Item>
            <img
              className="jasmine"
              src="../img/jasmine.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Jasmine</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="lavander"
              src="../img/lavender.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Lavender</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="lily" src="../img/lily.jpg" alt="Third slide" />
            <Carousel.Caption>
              <p>Lily</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="pansy" src="../img/pansy.jpg" alt="Quarter slide" />
            <Carousel.Caption>
              <p>Pansy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="plumeria"
              src="../img/plumeria.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <p>Plumeria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rose" src="../img/rose.jpg" alt="Sixth slide" />
            <Carousel.Caption>
              <p>Rose</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="sunflower"
              src="../img/sunflower.jpg"
              alt="Seventh slide"
            />
            <Carousel.Caption>
              <p>Sunflower</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="zinnia"
              src="../img/zinnia.jpg"
              alt="Eighth slide"
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
