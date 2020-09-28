import React from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import styles from "./Slider.module.css"

export const Slider = () => {
  return (
    <Carousel className={styles.slider}>
      <CarouselItem>
        <img className="d-block w-100" src="http://placehold.it/900x350" alt="Sales promotions" />
        <Carousel.Caption>
          <h3>Diet Coke</h3>
          <p>2 bottles of Diet Coke for £8</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img className="d-block w-100" src="http://placehold.it/900x350" alt="Sales promotions" />
        <Carousel.Caption>
          <h3>Fine Beans</h3>
          <p>3 Fine Beans for price of 2.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img className="d-block w-100" src="http://placehold.it/900x350" alt="Sales promotions" />
        <Carousel.Caption>
          <h3>Hobgoblin Ipa</h3>
          <p>By 3 beers get one free.</p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  )
}
