import React from 'react';
import BlogNav from '../components/Nav.jsx';




import Footer from '../components/Footer.jsx';
import BlogCards from '../components/BlogCards.jsx';




export default function Home() {

    return (

        <div>
            <div class="container-fluid">
                <BlogNav />
                <BlogCards/>
                <Footer />
            </div>
        </div>



    );

}