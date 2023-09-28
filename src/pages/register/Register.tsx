import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SignupForm from '../components/Forms/Signup/SignupForm'

const Register = () => {
    return (
        
    <div className="container text-capitalize mt-5 mb-5">
        <Head>
            <title>Register - Paperwork</title>
        </Head>
         <div className="row text-capitalize">
            <div className="col-lg-6 col-md-6 col-sm-12 bg-primary shadow p-3 border-3">
                <h4>Welcome to Register page</h4>
                <h1 className="display-1 fw-bold text-white p-3">Logoz</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg-white shadow p-3 border-3">
               <SignupForm />            
            </div>
        </div>             
    </div>
    );
};


export default Register;
