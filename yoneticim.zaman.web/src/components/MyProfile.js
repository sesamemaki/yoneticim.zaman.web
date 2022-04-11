import React from 'react'

function MyProfile() {
    return (

        <div className="body-inner">
            <section className="pt-3 pb-3">
                <div className="container-fluid d-flex flex-column">
                <div className="widget ">
                    
                    <ul className="list list-legend list-group-item list-group-item-info">
                      <li><a href="/efforts"><h4>Efforts</h4></a></li>
                      <li><a href="#"><h4>Projects</h4></a></li>
                      <li><a href="#"><h4>Users</h4></a></li>
                      <li><a href="#"><h4>Companies</h4></a></li>
                    </ul>
                  </div>
                    <div className="row align-items-center min-vh-60">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <h3>My Profile</h3>
                            <form id="form1" className="form-validate mt-5">
                                <div className="h5 mb-4">Account details</div>
                                
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" name="Name" placeholder="name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="text">Surname</label>
                                        <input type="text" className="form-control" name="Surname" placeholder="surname" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" name="email" placeholder="email" />
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

                                <button type="submit" className="btn m-t-30 mt-3">Save</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </div>


    )
}

export default MyProfile;

