import React from 'react';
import Nav from '../components/Nav.jsx';
import ServicesHero from '../components/ServicesHero.jsx';
import Costumers from '../components/Costumers.jsx';
import Metrics from '../components/Metrics.jsx';
import Footer from '../components/Footer.jsx';
import ServicesSolution from '../components/ServicesSolution.jsx';
import ServicesSimpleSteps from '../components/ServicesSimpleSteps.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import Arrows from '../components/Arrows.jsx';
import ServicesLaunch from '../components/ServicesLaunch.jsx';


export default function Services() {

    return (

        <div>
            <div class="container-fluid">
                <Nav />
                <ServicesHero />
                <ServicesSolution />
                <ServicesSimpleSteps />
                <ServicesSection />
                <Costumers />
                <Arrows />
                <Metrics />
                <ServicesLaunch />
                <Footer />
            </div>
        </div>



    );

}