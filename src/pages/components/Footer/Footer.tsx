import Link from 'next/link';
import React from 'react';

const Footer = () => {

 const currentYear = new Date().getFullYear();


    return (
<footer className="text-center p-3 text-capitalize">
  <div className="text-dark">
    <p>copyright  &copy; {currentYear}. All Rights Reserved</p>  
  </div>
</footer>
    );
};


export default Footer;