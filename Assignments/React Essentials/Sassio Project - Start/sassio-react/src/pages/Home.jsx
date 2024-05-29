import React from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Trust from '../components/Trust.jsx';
import Secure from '../components/Secure.jsx';
import Benefits from '../components/Benefits.jsx';
import PathSucces from '../components/PathSucces.jsx';
import Powerfull from '../components/Powerfull.jsx';
import Costumers from '../components/Costumers.jsx';
import Arrows from '../components/Arrows.jsx';
import Metrics from '../components/Metrics.jsx';
import AppSection from '../components/AppSection.jsx';
import Pricing from '../components/Pricing.jsx';
import Faq from '../components/Faq.jsx';
import DownApp from '../components/DownApp.jsx';
import Footer from '../components/Footer.jsx';
import ScrollArrow from '../components/ScrollArrow.jsx';

export default function Home() {

  return (
    <div>
    <div class="container-fixed">
      <Nav />
      <Hero />
      </div>
      <Trust  />
      <Secure />
      <Benefits />
      <PathSucces/>
      <Powerfull/>
      <Costumers/>
      <Arrows/>
      <Metrics/>
      <AppSection/>
      <Pricing/>
      <Faq/>
      <DownApp/>
      <Footer/>
      <ScrollArrow/>

    </div>


  )
}