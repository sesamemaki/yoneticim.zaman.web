import React from 'react'


const Navbar = () => {

    return (

        <div id="mainMenu">
            <div id="logo">
                <span className="logo-default">
                    <img src="./logo/yoneticim-logo-med.png" alt="logo" />
                </span>
                <a href="index.html">
                </a>          
            
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="index.html">My Profile</a></li>
                        <li><a href="/registerform"><i class="fas fa-user-plus"></i>Register</a></li>
                        <li><a href="/loginform"><i class="fas fa-sign-in-alt"></i>Login</a></li>
                    </ul>
                </nav>
                </div>
        </div>
    );
};


export default Navbar;




