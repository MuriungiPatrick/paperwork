import Link from 'next/link';
import React from 'react'
import Sidebar from '@/pages/components/Sidebar/Sidebar'
import Header from '@/pages/components/Header/Header'
import Footer from '@/pages/components/Footer/Footer'
import Layout from '@/pages/dashboard/Layout'
import Head from 'next/head'
import { Gear, HouseFill } from 'react-bootstrap-icons'

const Dashboard: React.FC = () => {
    return (
      
<Layout>  
 <Head>
    <title>Dashboard - Paperwork</title>
  </Head>
  <section className="dashboard">
    <div className="text-center text-white">
      <div className="bg-primary p-3">
          <h1>dashboard</h1>
      </div>
    </div>
  </section>
</Layout>
    );
};


export default Dashboard;