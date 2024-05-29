import React from 'react';
import Nav from '../components/Nav.jsx';
import HeroAbout from '../components/HeroAbout.jsx';
import AboutCompany from '../components/AboutCompany.jsx';
import Metrics from '../components/Metrics.jsx';
import Secure from '../components/Secure.jsx';
import Costumers from '../components/Costumers.jsx';
import AboutDevelopment from '../components/AboutDevelopment.jsx';
import AboutBrands from '../components/AboutBrands.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {

  return (

    <div>
      <div class="container-fluid">
        <Nav />
        <HeroAbout/>
        <AboutCompany/>
        <Metrics/>
        <Secure/>
        <Costumers/>
       <AboutDevelopment/>
       <AboutBrands/>
       <Footer/>
        </div>
    </div>



      );
  
}