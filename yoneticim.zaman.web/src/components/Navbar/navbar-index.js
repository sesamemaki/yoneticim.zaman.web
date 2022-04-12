import React from 'react'


const Navbar = () => {

    return (
        <header id="header" className="header-always-fixed">
            <div className="header-inner">
                <div className="container">


                    <div id="logo">
                        <span className="logo-default ">
                            <img src="./logo/yoneticim-logo-med.png" alt="logo" />
                        </span>
                        <a href="index.html">
                        </a>
                    </div>

                    <div id="mainMenu">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/myprofile">My Profile</a></li>
                                    <li><a href="/registerform"><i className="fas fa-user-plus"></i>Register</a></li>
                                    <li><a href="/loginform"><i className="fas fa-sign-in-alt"></i>Login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Navbar;




