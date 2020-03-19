import React, { Component } from 'react';
import Categories from '../Homepage/Categories/Categories';
import Carousel from 'nuka-carousel';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 0,
            wrapAround: false,
            underlineHeader: false,
            slidesToShow: 1,
            slidesToScroll: "auto",
            cellAlign: "left",
            transitionMode: "scroll",
            heightMode: "max",
            withoutControls: false
        };
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleImageClick() {
        this.setState({ underlineHeader: !this.state.underlineHeader });
    }



    render() {
        return (
            <div className="container">

                <Categories />
                <div className="carousel-home">
                    <Carousel
                        withoutControls={this.state.withoutControls}
                        transitionMode={this.state.transitionMode}
                        cellAlign={this.state.cellAlign}
                        slidesToShow={this.state.slidesToShow}
                        slidesToScroll={this.state.slidesToScroll}
                        wrapAround={this.state.wrapAround}
                        slideIndex={this.state.slideIndex}
                        heightMode={this.state.heightMode}
                    >
                        <img src="https://www.petpoint.co.il/images/light_and_fit(1).jpg" />
                        <img src="https://5.imimg.com/data5/KI/WY/MY-40297789/glass-bowl-fish-tank-500x500.jpg" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
                    </Carousel>
                </div>
            </div>

        );
    }
}



export default Homepage;
