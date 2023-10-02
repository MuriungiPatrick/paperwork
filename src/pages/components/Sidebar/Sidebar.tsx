import classNames from "classnames";
import Link from 'next/link'
import { useRouter } from "next/router";
import CollapsIcon from './CollapsIcon';
import LogoutIcon from './LogoutIcon';
import { 
  Gear, HouseFill, 
  Unlock, Forward, 
  ChevronDoubleLeft, 
  ChatLeftText, 
  People, GearFill, 
  Grid } from 'react-bootstrap-icons'
import Image from 'next/image' 
import React, { useState, useMemo } from "react";


const menuItems = [
  { id: 1, label: "Dashboard", icon: HouseFill, link: "/dashboard" },
  { id: 2, label: "Profile", icon: People, link: "/dashboard/profile" },
  { id: 3, label: "Settings", icon: Gear, link: "/dashboard/settings" },
  { id: 4, label: "Login", icon: Unlock, link: "/login" },
  { id: 5, label: "Signup", icon: People, link: "/register" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-100 pt-4 d-block py-3 border-bottom rounded-0",
    {
      ["d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"]: !toggleCollapse,
      ["text-decoration-none"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 text-primary position-absolute px-8",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "nav-link py-3 border-bottom rounded-0",
      {
        ["bg-light"]: activeMenu === menu,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (

<div
    className={wrapperClasses}
    onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOver}
    style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
  >
    <div className="d-flex flex-column flex-shrink-0 p-3">         
     <Image
        className="rounded-circle mt-3 end-0"
        src="/images/profile.jpg"
        width={50}
        height={50} 
        alt={'profile'}
        />

     <span
          className={classNames("nav-link text-primary active py-3 border-bottom rounded-0", {
            hidden: toggleCollapse,
          })}
        >
          
        </span>        
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon className="toggleicon" />
            </button>
          )}

       
    <ul className="nav nav-pills nav-flush text-white flex-column mb-auto">
      {menuItems.map(({ icon: Icon, ...menu }) => {
        const classes = getNavItemClasses(menu);
        return (
          <div className={classes}>               
              <li className="nav-item">
                <Link href={menu.link}>
                  <Icon className="icon" />                   
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "fw-bold px-3 fs-6"
                        )}>
                        {menu.label}
                      </span>
                    )}
                 </Link>
              </li>              
          </div>
        );
      })}
    </ul>
    <LogoutIcon
        className="p-3 text-bg-primary text-center mt-3 end-0"
        size={35}
        />
  </div>   
</div>


  );
};


export default Sidebar;