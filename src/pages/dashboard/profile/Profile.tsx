import Link from 'next/link'
import React from 'react';
import Layout from '@/pages/dashboard/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'



const Profile = () => {
    return (

<Layout>
   <Head>
     <title>Profile Page - Paperwork</title>
   </Head>
   <section className="profile">
      <div className="row align-items-center">   
      <div className="col-lg-12">
        <div className="profile-pic p-3 bg-primary text-center">
          <Image
            className="rounded-circle"
            src="/images/profile.jpg"
            width={100}
            height={100} 
            alt={'profile'}
            />
          <h4>Patrick Muriungi</h4>
          <button className="btn btn-light text-end">edit profile</button>
        </div>
      </div>
        <div className="col-lg-6 mt-3">
          <div className="profile profile--body bg-white">
            <div className="p-3">                     
                  <h3 className="fw-bold">About me</h3>            
              <div className="mt-3">
                <div className="show active" id="profile-overview">
                  <h5 className="profile profile--title">About</h5>
                  <p className="text-dark">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>   
                </div>           
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <div className="profile profile--body bg-white">
            <div className="p-3">                     
                  <h3 className="fw-semibold">profile details</h3>            
              <div className="mt-3">
                <div className="fade show active" id="profile-overview">          
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
</Layout>
        
    );
};


export default Profile;