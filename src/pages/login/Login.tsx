import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LoginForm from '../components/Forms/Login/LoginForm'
import Image from 'next/image'

const Login = () => {
    return (
    
    <div className="container text-center text-capitalize mt-5 mb-5">
        <Head>
            <title>Login - Paperwork</title>
        </Head>
         <div className="row align-items-center bg-primary">
            <div className="col-lg-6 col-md-6 col-sm-12 bg-primary shadow p-3 border-3">
                <h4>Welcome to login page</h4>
                <Image
                  className="align-content-center"
                  src="/images/logo.png"
                  width={350}
                  height={250} 
                  alt={'logo'}
                  />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg-white shadow p-3 border-3">
                <LoginForm />
                <div className="d-flex text-center flex-center flex-wrap fs-6 p-5 pb-0">         
                    <div className="d-flex flex-center">
                        <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">About</a>
                        <a href="https://devs.keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
                        <a href="https://keenthemes.com/products/oswald-html-pro" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
                    </div>     
                </div>
            </div>
        </div>             
    </div>
    );
};


export default Login;
