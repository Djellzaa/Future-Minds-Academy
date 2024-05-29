import React from 'react';

export default function ContactForm() {
    return (
        <div class="contact wrapper-md">
            <div class="contact-form">
                <div class="text-contact text-center">
                    <button class="speciale contact-us">Message</button>
                    <h1 class="dark">Tell us about yourself</h1>
                </div>
                <div class="container">
                    <form action="#">
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Full Name</label>
                            </div>
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Your Email Adress</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Your Subject</label>
                            </div>
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Phone Number</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea rows="20" cols="180" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Message</label>
                                <br />
                            </div>
                        </div>
                        <div class="bottom-part">
                            <div class="input-check">
                                <input type="checkbox" name="" id="" />
                                <label>I am bound by the terms of the Service I accept Privacy Policy.</label>
                            </div>
                            <button class="pro-btn contact-us">Send your message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}