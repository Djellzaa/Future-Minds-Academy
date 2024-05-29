import React from 'react';

export default function Pricing() {
    return (
        <div class="wrapper-xl">
            <div class="simple-pricing m-1 p-1">
                <div class="col-1 text-center">
                    <button class="speciale-1 plans">PLANS</button><br />
                    <h1 class="display-1">Simple Pricing</h1>
                </div>
                <div class="col text-center m-5">
                    <span class="modify">Modify</span>
                    <label class="switch-container mx-2">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <span>Annually Save 30%</span>
                </div><br />
                <div class="row gap-3">
                    <div class="col-4 basic">
                        <button class="pro-btn ">Most Popular</button><br />
                        <div class="basic-info">
                            <p>Basic</p>
                            <h2>Free</h2>
                            <p class="mini">per month</p>
                            <br />
                        </div>
                        <p class="pricing-paragraf">Standard listing submission, active for <br /> 30 days</p>
                        <ul class="custom-list">
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Great Interface</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Allows encryption</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Face recognized system</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button class="basic-btn">GET STARTED</button><br />
                    </div>
                    <div class="col-4 proffesional">
                        <div class="basic-info">
                            <button class="pro-btn ">Most Popular</button><br />
                            <p>Professional</p>
                            <h2>$599.95</h2>
                            <p class="mini">per month</p>
                            <br />
                        </div>
                        <p class="pricing-paragraf">Standard listing submission, active for <br /> 30 days</p>
                        <ul class="custom-list">
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Great Interface</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Allows encryption</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Face recognized system</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button class="basic-btn-pro">GET STARTED</button><br />
                    </div>
                    <div class="col-4 bussines">
                        <button class="pro-btn ">Most Popular</button><br />
                        <div class="basic-info">
                            <p>Bussines</p>
                            <h2>$999.95</h2>
                            <p class="mini">per month</p>
                            <br />
                        </div>
                        <p class="pricing-paragraf">Standard listing submission, active for <br /> 30 days</p>
                        <ul class="custom-list">
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">All Operating Supported</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Great Interface</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Allows encryption</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">Face recognized system</span>
                            </li>
                            <li>
                                <div class="icon-container-custom done">
                                    <span class="material-symbols-outlined check-small">check_small</span>
                                </div>
                                <span class="text">24/7 Full support</span>
                            </li>
                        </ul>
                        <button class="basic-btn text-left">GET STARTED</button><br />
                    </div>
                </div>
            </div>
        </div>
    )
}