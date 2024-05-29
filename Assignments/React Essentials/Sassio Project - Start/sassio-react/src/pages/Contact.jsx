import React from 'react';
import Nav from '../components/Nav.jsx';
import ContactHero from '../components/ContactHero.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactSupport from '../components/ContactSupport.jsx';
import Footer from '../components/Footer.jsx';




export default function Home() {

  return (

    <div>
      <div class="container-fluid">
        <Nav />
        <ContactHero/>
        <ContactInfo/>
        <ContactForm/>
        <ContactSupport/>
        <Footer/>
        </div>
    </div>



      );
  
}