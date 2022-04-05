import React from 'react';


function LoginForm() {
    return (
        <div className="body-inner">
            <section className="pt-1 pb-1">
                <div className="container-fluid d-flex flex-column">
                    <div className="row align-items-center min-vh-60">
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-5 text-center">
                                        <h6 className="h3 mb-1">Login</h6>
                                        <p className="text-muted mb-0">Sign in to your account to continue.</p>
                                    </div><span className="clearfix"></span>
                                    <form className="form-validate">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" name="email" placeholder="Enter your email" required="" />
                                                <span className="input-group-text"><i className="icon-user"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="password">Password</label>
                                            <div className="input-group show-hide-password">
                                                <input className="form-control" name="password" placeholder="Enter password" type="password" required="" />
                                                <span className="input-group-text"><i className="icon-eye-off" aria-hidden="true"></i></span>
                                            </div>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" id="exampleCheck1" type="checkbox" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>

                                        <div className="mt-4"><button type="submit" className="btn btn-primary btn-block btn-primary">Sign in</button></div>
                                    </form>
                                    <div className="mt-4 text-center"><small>Not registered?</small> <a href="/" className="small fw-bold">Create account</a><br/>
                                    <a href="recovery-password" className="small fw-bold">Forgot your password?</a>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginForm;
