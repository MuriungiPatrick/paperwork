import Link from 'next/link'
import React from 'react'
import { Gear, HouseFill, Unlock, ChatLeftText, People, GearFill, Grid } from 'react-bootstrap-icons'
import Image from 'next/image' 


const Sidebar = () => {
    return (

<div className="side">
  <Link className="d-block p-3 bg-light" href="/dashboard">  
    <HouseFill size={20} />
  </Link>

<ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/dashboard">   
        <HouseFill size={20} />    
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/dashboard/profile">
        <GearFill size={20} />   
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/conversations/">
        <ChatLeftText size={20} />     
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/dashboard/settings">
        <Gear />   
      </Link>
    </li>

   <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/login">
        <Unlock size={20} />  
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link active py-3 border-bottom rounded-0" 
      href="/register">
        <People size={20} />
      </Link>
    </li>
    <div classNam="text-end">
      <Image
      className="rounded-circle"
      src="/images/profile.jpg"
      width={50}
      height={50} 
      alt={'profile'}
      />
    </div>
  </ul>  
</div>

  );
};


export default Sidebar;