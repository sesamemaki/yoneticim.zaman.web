import React from 'react'

function RegisterForm() {
    return (
        <div className="body-inner">
            <section className="pt-5 pb-5">
                <div className="container-fluid d-flex flex-column">
                    <div className="row align-items-center min-vh-60">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <h3>Register New Account</h3>
                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                            <form id="form1" className="form-validate mt-5">
                                <div className="h5 mb-4">Account details</div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" name="username" placeholder="Enter username" required="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter your email" required="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group show-hide-password">
                                            <input className="form-control" name="password" placeholder="Enter password" type="text" required="" />
                                            <span className="input-group-text"><i className="icon-eye" aria-hidden="true" ></i></span>

                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <div className="input-group show-hide-password">
                                            <input className="form-control" name="password2" placeholder="Enter password" type="password" required="" />
                                            <span className="input-group-text"><i className="icon-eye-off" aria-hidden="true" ></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter your Name" required="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="surname">Surname</label>
                                        <input type="text" className="form-control" name="surname" placeholder="Enter your Surname" required="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="gender">Gender</label>
                                        <select className="form-select" name="gender" required="">
                                            <option value="">Select your gender</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Rather not say</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="gender">Date of Birth</label>
                                        <input className="form-control" type="date" name="dateofbirth" required="" />
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" name="terms_conditions" id="terms_conditions" className="form-check-input" value="1" required="" />
                                    <label className="custom-control-label" htmlFor="terms_conditions">By checking this option, you agree to accept with the <a href="#">Terms and Conditions</a>.</label>
                                </div>
                                <button type="submit" className="btn m-t-30 mt-3">Submit</button>
                            </form>
                            <div className="mt-4"><small>Already have an acocunt?</small> <a href="page-user-login.html" className="small fw-bold">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}


export default RegisterForm;
