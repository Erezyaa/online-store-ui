import React, { Component } from 'react';
import Categories from '../Homepage/Categories/Categories';


export class Homepage extends Component {



    render() {
        return (
            <div className="container">

                <Categories />

                {/* <Carousel interval={3000} className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://cdn.yalla.co.il/media/v1/u5470/zoom/14920963430-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>מבצע לכבוד השנה החדשה!</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img
                            className="d-block"
                            src="https://d2rp9bqx0m7ihv.cloudfront.net/media/1/photos/products/069875/69875-228847-acana-light-fit-all-breeds-6-8-kg-2_1_g.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>אקנה לייט</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.animalshop.co.il/images/itempics/4756001_18052019230347_large.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>מבצע על האקווריומים</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}

            </div>

        );
    }
}

export default Homepage;
