
import React from 'react';

export default function Nav() {
  return (
    <div>
      <header class="header row" id="top">
        <div class="col logo-col">
          <img src="assets/images/logo.png" alt=" " />
        </div>
        <button class="btn-white duplicate">Join</button>
        <div class="hamburger" tabindex="0">
          <span class="material-symbols-outlined">menu</span>
          <div class="notification-down">
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
        <div class="col navigation-col">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/portofolio">Portfolio</a>
          <a href="/contact">Contact Us</a>
          <a href="/blog">Blog</a>
        </div>
        <div class="col btn-primary">
          <button class="btn-white">Join</button>
          <button class="btn-black">Get the App</button>
        </div>
      </header>
    </div>
  );
}
