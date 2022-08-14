import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../assetts/hetali logo_nav.png'
import '../Styles/Nav.css'

const Navbar = () => {
    return (
        <div class="navbar bg-base-200 px-10">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/' className='flex flex-col place-items-start'>
        About Us
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/projects' className='flex flex-col place-items-start'>
        Projects
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/diversification' className='flex flex-col place-items-start'>
        Diversification
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/ourProcess' className='flex flex-col place-items-start'>
        Our Process
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/testimonials' className='flex flex-col place-items-start'>
        Testimonials
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/careers' className='flex flex-col place-items-start'>
        Careers
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/contact' className='flex flex-col place-items-start'>
        Contact Us
        <div id='hello'></div>
        </Link></li>
      </ul>
    </div>
    <Link to='/' class="w-36">
      <img src={navlogo} alt="" />
    </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 uppercase">
      <li><Link to='/' className='flex flex-col place-items-start'>
        About Us
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/projects' className='flex flex-col place-items-start'>
        Projects
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/diversification' className='flex flex-col place-items-start'>
        Diversification
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/ourProcess' className='flex flex-col place-items-start'>
        Our Process
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/testimonials' className='flex flex-col place-items-start'>
        Testimonials
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/careers' className='flex flex-col place-items-start'>
        Careers
        <div id='hello'></div>
        </Link></li>
      <li><Link to='/contact' className='flex flex-col place-items-start'>
        Contact Us
        <div id='hello'></div>
        </Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;