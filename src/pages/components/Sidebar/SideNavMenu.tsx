import Link from 'next/link';
import React from 'react';

const SidebarNavBar = () => {
    return (
        
    
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="#" className="nav-link active" aria-current="page">
              {/* <HouseFill />       */}Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard/profile" className="nav-link d-flex align-items-center gap-2">
              Profile      
          </Link>
        </li>
        <li>
          <Link href="#" className="nav-link d-flex align-items-center gap-2">     
            Orders
          </Link>
        </li>
        <li>
          <Link href="#" className="nav-link d-flex align-items-center gap-2">    
          Login
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="nav-link d-flex align-items-center gap-2">          
            Settings
          </Link>
        </li>
      </ul>
 
      
    );
};


export default SidebarNavBar;