import React from 'react';
import Header from '@/pages/components/Header/Header'
import Footer from '@/pages/components/Footer/Footer'
import Layout from '@/pages/dashboard/Layout'
import Head from 'next/head'

const Settings: React.FC = () => {
    return (

<Layout>  
 <Head>
    <title>Settings - Paperwork</title>
  </Head>
  <section className="settings">
    <div className="text-center text-dark">
      <div className="bg-gray-200 p-3">
      <h1>Settings Page</h1>
      </div>
    </div>
  </section>
</Layout>
    );
};


export default Settings;