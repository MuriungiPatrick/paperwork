import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ChatLeftText, BoxArrowRight,Search, List, Bell, QuestionCircle, Person, Gear } from 'react-bootstrap-icons';

const Header = () => {

  const newLocal = "rounded-circle";
  return (

  <header className="header shadow justify-content-between 
  d-flex align-items-center bg-white">
    <div className="align-items-center justify-content-between">
      <Link href="index.html" 
      className="logo d-flex align-items-center">
        <Image 
          src="/images/logo.png"
          width={40}
          height={80} 
          alt={'logo'}
          />
        <span className="d-none d-lg-block">Logoz</span>
      </Link>

    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle 
          " href="#">
            <Search />
          </a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <ChatLeftText />
            <span className="badge bg-success badge-number">3</span>
          </a> 

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="message-item">
              <Link href="#">
                <Image 
                  src="/images/logo.png"
                  className="rounded-circle"
                  fill    
                  alt={'profile'}  
                  />
              </Link>
            </li>                  
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link d-flex align-items-center pt-3" 
          href="#" data-bs-toggle="dropdown"> 
          <span className="fw-bold">Patrick</span>
            <Image 
              src="/images/profile.jpg" 
              alt="Profile"
              width={50}
              height={50}
              className="img-fluid rounded-circle" 
              />                      
          </a>
        </li>
      </ul>
    </nav>
  </header>
    
  );
}

export default Header;

