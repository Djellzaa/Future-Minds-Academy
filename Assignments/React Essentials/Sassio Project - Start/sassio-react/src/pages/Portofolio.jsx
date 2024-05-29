import React from 'react';
import Nav from '../components/Nav.jsx';
import PortfolioHero from '../components/PortofolioHero.jsx';
import Footer from '../components/Footer.jsx';
import ProtofolioServices from '../components/PortofolioServices.jsx';

export default function Home() {

    return (

        <div>
            <div class="container-fixed">
                <Nav />
                <PortfolioHero />
                <ProtofolioServices />
                <Footer />
            </div>
        </div>



    );

}