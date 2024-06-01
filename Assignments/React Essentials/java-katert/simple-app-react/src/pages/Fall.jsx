import React from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';



export default function Fall(props) {

  return (

    <div class="container-fixed">
      <Nav  />
      <Hero 
      title="Welcome to Fall" 
      photo ="fall.png"
      alt =""
      />
      <Footer/>
    </div>


  )
}