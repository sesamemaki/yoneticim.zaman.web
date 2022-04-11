import React from 'react'
import background from "../img/timer.png";


function Home() {
    return (
        <div className="body-inner">
            <section className="profile-content">
                <div className="profile-image"
                style={{
                    backgroundImage: `url(${background})`,
                    position: 'absolute'
                }}>

                </div>
                <div className="profile-bio col-lg-4 m-t-5">
                    <h3>What is zaman.yonetic.im?</h3>
                    <br />
                    <p>zaman.yonetic.im is a time logging software which keeps track of your efforts.<br />
                    Yes maybe this is not a new thing and maybe lots of project management or issue tracking tool may help to log your efforts but they are slow and very complex for a simple issue like this. Our aim is to create simple way to record your efforts and give ability to create easy reports for your manager.</p>
                    <br />
                    <h3>And what isn't?</h3>
                    <p>zaman.yonetic.im is not a issue tracker or project management software.</p>
                    
                    <a href='/efforts' className="btn m-t-30 mt-3">Log your efforts NOW!</a>
                </div>
            </section>
        </div>


    )
}

export default Home;
