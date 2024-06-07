import React from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';



export default function Allseason() {

  return (

    <div class="container-fixed">
      <Nav/>  
      <main class="row">
            <div class="col">
                <h1 class="text-center">Welcome to all seasons!</h1>
                <div>
                    <img class="img-xxl" src="assets/images/spring.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/summer.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/fall.png" alt="Summer" />
                </div>
                <div>
                    <img class="img-xxl" src="assets/images/winter.png" alt="Summer" />
                </div>

            </div>
        </main>
     <></>
      <Hero/>
      <Footer/>

    </div>


  )
}