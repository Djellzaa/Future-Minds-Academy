import React from 'react';

export default function AppSection() {
    return (
        <div class="wrapper-xl">
            <div class="row p-2">
                <div class="app-screnshot m-5 p-8">
                    <div class="col text-center">
                        <button class="speciale-1 appsc">EXPLORE NEW PLACES</button><br />
                        <h1 class="display-3">App ScreenShot</h1>
                        <br />
                    </div>
                    <div class="col-1 apps">
                        <img src="assets/images/market.png" alt="" class="screen market" />
                        <img src="assets/images/protofolio.png" alt="" class="screen pro" />
                        <img src="assets/images/trading.png" alt="" class="screen trading" />
                    </div>
                    <div class="bullet-container">
                        <div class="bullet"></div>
                        <div class="bullet"></div>
                        <div class="bullet"></div>
                        <div class="bullet"></div>
                        <div class="bullet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}