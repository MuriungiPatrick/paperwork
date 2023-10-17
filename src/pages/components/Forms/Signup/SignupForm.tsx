import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Google, Facebook } from 'react-bootstrap-icons'

const SignupForm = () => {
    return (
    
<form className="form w-100" novalidate="novalidate" data-kt-redirect-url="../dist/authentication/sign-in/basic.html" id="kt_sign_up_form">
    <div className="mb-10 text-center">
        <h1 className="text-dark mb-3 pt-3">Create an Account</h1>
        <div className="text-gray-400 fw-semibold fs-4">Already have an account?
        <a href="login" className="link-primary">Sign in here</a></div>
    </div>
    <button type="button" className="btn btn-light-primary fw-bold w-100 mb-10">
    <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Sign in with Google</button>
    <div className="d-flex align-items-center mb-10">
        <div className="border-bottom border-gray-300 mw-50 w-100"></div>
        <span className="fw-semibold text-gray-400 fs-7 mx-2">OR</span>
        <div className="border-bottom border-gray-300 mw-50 w-100"></div>
    </div>
    <div className="row fv-row mb-7">
        <div className="col-xl-6">
            <label className="form-label fw-bold text-dark fs-6">First Name</label>
            <input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" />
        </div>
        <div className="col-xl-6">
            <label className="form-label fw-bold text-dark fs-6">Last Name</label>
            <input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
        </div>
    </div>
    <div className="fv-row mb-7">
        <label className="form-label fw-bold text-dark fs-6">Email</label>
        <input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
    </div>
    <div className="mb-10 fv-row" data-kt-password-meter="true">
        <div className="mb-1">
            <label className="form-label fw-bold text-dark fs-6">Password</label>
            <div className="position-relative mb-3">
                <input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
                <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                    <i className="ki-duotone ki-eye-slash fs-2"></i>
                    <i className="ki-duotone ki-eye fs-2 d-none"></i>
                </span>
            </div>
            <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
            </div>
        </div>
        <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
    </div>
    <div className="fv-row mb-5">
        <label className="form-label fw-bold text-dark fs-6">Confirm Password</label>
        <input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autocomplete="off" />
    </div>
    <div className="fv-row mb-10">
        <label className="form-check form-check-custom form-check-solid form-check-inline">
            <input className="form-check-input" type="checkbox" name="toc" value="1" />
            <span className="form-check-label fw-semibold text-gray-700 fs-6">I Agree
            <a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>
        </label>
    </div>
    <div className="text-center">
        <button type="button" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
            <span className="indicator-label">Submit</span>
            <span className="indicator-progress">Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
        </button>
    </div>
</form>

    

    );
};


export default SignupForm;
