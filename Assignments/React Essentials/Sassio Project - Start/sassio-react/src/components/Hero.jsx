import React from 'react';

export default function Hero(props) {
    return (
        <div>
            <div className="hero row">
                <div className="col text-left p-5 m-5 intro">
                    <button className="btn-primary speciale">On sale for a limited time</button>
                    <h1 className="display-1">{props.title}</h1>
                    <h1 className="display-2">{props.subtitle}</h1>
                    <p className="hero-paragraph">Besides its beautiful design. Sassio is an incredibly rich core<br/> framework for
                        you to showcase your
                        App </p>
                    <div className="buttons">
                        <div className="button-container">
                            <img className="button-image" src="assets/images/icone_apple.png" alt="another button"/>
                            <span className="seperator"></span>
                            <div className="button-text">
                                <span className="button-download">Download on the</span>
                                <span className="bold-text">Apple Store</span>
                            </div>
                        </div>
                        <div className="button-container">
                            <img className="button-image" src="assets/images/icone_android.png" alt="a button that is needen "/>
                            <span className="seperator"></span>
                            <div className="button-text">
                                <span className="button-download">Get it on</span>
                                <span className="bold-text">Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/bg.png" alt="img" className="bg-img"/>
                <div className="col pictures">
                    <img src="assets/images/phones.png" alt="an interesting thing" className="img-fluid"/>
                    <img src="assets/images/pattern-bg.png" alt="pattern" className="pattern-img"/>
                </div>
            </div>
        </div>
    );
}
