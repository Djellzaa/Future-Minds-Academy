import React from 'react';

export default function DownApp() {
    return (
        <div class="wrapper-xl">
               <div class="row down-app">
         <div class="col-1 text-left p-5 m-5">
            <button class="btn-primary speciale-1">START TODAY</button>
            <h1 class="display-4">Download the App</h1>
            <p class="paragraf-app">New features. New appearance. No risk and credit card required.</p>
            <div class="buttons">
               <div class="button-container">
                  <img class="button-image" src="assets/images/icone_apple.png" alt=""/>
                  <span class="seperator"></span>
                  <div class="button-text">
                     <span class="button-download">Download on the</span>
                     <span class="bold-text">Apple Store</span>
                  </div>
               </div>
               <div class="button-container">
                  <img class="button-image" src="assets/images/icone_android.png" alt=""/>
                  <span class="seperator"></span>
                  <div class="button-text">
                     <span class="button-download">Get it on</span>
                     <span class="bold-text">Google Play</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-1">
            <img src="assets/images/two-phones-bg.png" class="img-end" alt=''/>
         </div>
      </div>
        </div>
    )
}