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
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
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