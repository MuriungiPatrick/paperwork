import Link from 'next/link'
import React from 'react'
import SideNavMenu from '../components/Sidebar/SideNavMenu';
// import { HouseFill } from 'bootstrap-icons'

const Dashboard = () => {
    return (

<div className="container-fluid">
  <div className="row">
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" 
          data-bs-target="#sidebarMenu" aria-label="Close">
          </button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto bg-dark">
          <ul className="nav flex-column">
        <h3 className="text-center">Sidebar</h3>
          <SideNavMenu />
          </ul>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="#">          
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="#">         
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
             This week
          </button>
        </div>
      </div>
      <h2>Section title</h2>
      <div className="table-responsive small">     
      </div>
    </main>
  </div>
</div>
    );
};


export default Dashboard;