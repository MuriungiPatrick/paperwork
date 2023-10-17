import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Google, Facebook } from 'react-bootstrap-icons'

const LoginForm = () => {
    return (
    
    <form className="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../dist/index.html" action="#">                         
        <div className="text-center pb-5 mb-10">                                
            <h1 className="text-dark pt-3 mb-3">
                Sign In to paperwork
            </h1> 
            <div className="text-gray-400">New Here?
            <Link href="/register/" 
            className="link-primary">Create an Account</Link>
            </div>                                    
        </div>
        <div className="fv-row mb-10 text-start">
            <label className="form-label fw-bold text-dark">Email</label>
            <input className="form-control mb-2 shadow form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
        </div>
        <div className="fv-row mb-10 text-start">
            <div className="d-flex flex-stack mb-2">
                <label className="form-label fw-bold text-dark mb-0">Password</label>
                <a href="../dist/authentication/sign-in/password-reset.html" className="link-primary">Forgot Password ?</a>
            </div>
            <input className="form-control mb-2 shadow form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
        </div>
          
        <div className="text-center mt-5">
            <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
                <span className="indicator-label">Continue</span>
                <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>                
        <div className="text-center text-muted text-uppercase mb-5">or</div>
            <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
               <Google />
            Continue with Google
            </a>
            <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
            <Facebook />
            Continue with Facebook
            </a>          
        </div>
    </form>

    

    );
};


export default LoginForm;
