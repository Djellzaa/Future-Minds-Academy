import React from 'react';

export default function BlogHero() {
    return (
        <div class="header blog row" id="top">
        <div class="col logo-col">
            <img src="assets/images/blog-logo.png" alt=""/>
        </div>
        <button class="btn-white duplicate blog">Join</button>
        <div class="hamburger-blog" tabindex="0">
            <span class="material-symbols-outlined">menu</span>
            <div class="notification-down-blog">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li class="button"><a href="index.html">Get the App</a></li>
                </ul>                    
            </div>
        </div>
        <div class="col navigation-col blog">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="portofolio.html">Portfolio</a>
            <a href="contact.html">Contact Us</a>
            <a href="blog.html">Blog</a>
        </div>
        <div class="col btn-primary blog">
            <button class="btn-white blog">Join</button>
            <button class="btn-black blog">Get the App</button>
        </div>
        <div class=" row header-text blog">
            <div class="col-6">
                <h1>Blog Styles</h1>
            </div>
            <div class="col-6">
                <p>With we want to optimize the customization process so your team can save time when building
                    websites.</p>
            </div>
        </div>
    </div>
    )}