import React from 'react';

export default function Faq() {
    return (
        <div class="wrapper-xl">
             <div class="row faq-section m-10 gap-9">
         <div class="col-1">
            <button class="speciale-1">GET HELP (HELP CENTER)</button>
            <h2 class="faq">Frequently asked questions.</h2>
         </div>
         <div class="col-1">
            <div class="faq-item">
               <span class="material-symbols-outlined">remove</span>
               <span class="dark">What does the package include?</span>
            </div>
            <div class="faq-item-content">
               <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for
                  styling, complete JS files with comments, all HTML variations. Besides, we include all mobile
                  PSD
                  mockups.
               </p>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">How does the 14-day trial work?</span>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">How do I pay for your service?</span>
            </div>
            <div class="faq-item">
               <span class="material-symbols-outlined">add</span>
               <span class="dark">Can I suggest a new feature?</span>
            </div>
         </div>
      </div>
        </div>
    )
}