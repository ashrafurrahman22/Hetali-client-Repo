import React from 'react';
import footerimg from '../assetts/hetali logo_footer.png';
import logo from '../assetts/icons/path834.png'
import '../Styles/Footer.css';

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

    return (
        <div style={{backgroundColor:"#004A74"}} className="text-white p-10">

<footer class="footer text-white">
       
       <div>
         <img src={footerimg} alt="" />
  </div> 
  <div>
    <span class="footer-title">Quick Links</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Testimonial</a> 
    <a class="link link-hover">Gallery</a>
    <a class="link link-hover">Site Map</a>
  </div> 
  <div>
    <span class="footer-title">Flats in Mumbai</span> 
    <a class="link link-hover">1BHK Andheri West</a> 
    <a class="link link-hover">2BHK Andheri West</a> 
    <a class="link link-hover">3BHK Andheri West</a>
    <a class="link link-hover">1BHK Goregaon West</a>
    <a class="link link-hover">1BHK Goregaon West</a>
  </div> 
  <div>
    <span class="footer-title">Projects in Mumbai</span> 
    <a class="link link-hover">Ongoing</a> 
    <a class="link link-hover">Upcoming</a> 
    <a class="link link-hover">Completed</a>
    <a class="link link-hover">Hetali Blessings</a>
    <a class="link link-hover">Hetali Anuchaya</a>
  </div>
      </footer>

      <div className='flex justify-center items-center'>

        <div id='divider' className="w-full"></div>
        <img src={logo} alt="" />
        <div id='divider' className="w-full"></div>
      </div>

      <div className='text-center pt-6'>
        <h2>Copyright © {year} Hetali Enterprises - All Rights Reserved.</h2>
      </div>

        </div>
    );
};

export default Footer;