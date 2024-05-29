import React from 'react';

export default function Benefits() {
    return (
        <div class="wrapper-lg text-center">
         <div class="benefit-section">
            <div class="row">
               <div class="col-1 m-2 p-2 replacement">
                  <img src="assets/images/benefit.png" alt="benefits"/>
               </div>
               <div class="col-1 m-3 p-3 benefit-info">
                  <div class="col benefit-header text-left ">
                     <button class="btn-primary speciale-1">SAFETY FIRST</button>
                     <h3 class="display-1">Tons of benefit</h3>
                  </div>
                  <div class="benefits">
                     <ul>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Development</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Web Design</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Do Magic</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Save Time</span>
                           </div>
                        </li>
                     </ul>
                     <ul class="item-left">
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">App builder</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Dashboard</span>
                           </div>
                        </li>
                        <li>
                           <div class="benefit-item">
                              <div class="icon-container">
                                 <span class="material-symbols-outlined">check</span>
                              </div>
                              <span class="dark">Feedback</span>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <button class="btn-free just-start">FREE TRIAL</button>
               </div>
               <div class="col-1 m-2 p-2 benefit-img">
                  <img src="assets/images/benefit.png" alt="benefits" class="benefit-img"/>
               </div>
            </div>
         </div>
        </div>
    )
}