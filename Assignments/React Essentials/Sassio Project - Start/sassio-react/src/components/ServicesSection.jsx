import React from 'react';

export default function ServicesSection() {
    return (
        <div class="wrapper-lg">
            <div class="services">
                <div class="row create-service">
                    <h1>Services</h1>
                    <a href="/"><p class="info-service">Start your project</p> </a>
                </div>
                <div class="row">
                    <div class="carousel">
                        <input type="radio" name="slide" id="slide1" checked />
                        <input type="radio" name="slide" id="slide2" />
                        <input type="radio" name="slide" id="slide3" />
                        <input type="radio" name="slide" id="slide4" />
                        <label for="slide1" class="arrow prev">&#10094;</label>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Mobile Data</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Financial Advisory</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Business Contracts</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Integration Dynamics</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Business Contractss</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/first.png" alt="" />
                                <div class="carousel-text">
                                    <h1>Financial Advisory</h1>
                                    <p>Achieve virtually any design and layout from within the one template.</p>
                                </div>
                            </div>
                        </div>
                        <label for="slide4" class="arrow next">&#10095;</label>
                        <label for="slide1" class="arrow prev">&#10094;</label>
                    </div>
                </div>
            </div>
        </div>
    )
}