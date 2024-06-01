import React from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';



export default function Summer() {

  return (

    <div class="container-fixed">
      <Nav  />
      <Hero 
      title="Welcome to Summer" 
      photo ="summer.png"
      />
      <Footer/>
    </div>


  )
}