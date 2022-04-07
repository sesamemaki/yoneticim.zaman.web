import React from 'react'


const Navbar = () => {

    return (
        <header id="header" class="header-always-fixed">
            <div class="header-inner">
                <div class="container">


                    <div id="logo">
                        <span className="logo-default ">
                            <img src="./logo/yoneticim-logo-med.png" alt="logo" />
                        </span>
                        <a href="index.html">
                        </a>
                    </div>

                    <div id="mainMenu">
                        <div class="container">
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/myprofile">My Profile</a></li>
                                    <li><a href="/registerform"><i class="fas fa-user-plus"></i>Register</a></li>
                                    <li><a href="/loginform"><i class="fas fa-sign-in-alt"></i>Login</a></li>
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




