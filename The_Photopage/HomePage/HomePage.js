import React, { useState, useEffect } from "react";
import './HomePage.css'
import logo_Photopage from "../../../images/generatedtext.png";
import {Link} from 'react-router-dom'
// import Sound from "react-sound"
// import welcome_sound from '../../../Sounds/camera-shutter-click-14671.mp3'


function HomePage() {

    const [welcome_Message, setWelcome_Message] = useState(true)

    useEffect(() => {
        setTimeout(() => setWelcome_Message(false), 3900);
    }, [setWelcome_Message]);

    return (
        <div className="homepage">
            <header>
                {!welcome_Message &&
                    <div className="headerhome headerhome_animation"><img src={logo_Photopage} height="100px" width="500px" ></img></div>
                }
            </header>
            <main>
                <article>
                    <section className="main_section1">
                        {
                            welcome_Message
                                ?   
                                <>
                                {/* <Sound url={welcome_sound} /> */}
                                <h1 className="welcomemsg ">Welcome to Photopage</h1></>
                                :
                                <div style={{ color: "white" }} className="main_users main_users_animation">
                                    <div className="main_section1_users">
                                        <Link className="link" to='/ThePhotopage/Login/Creator'><p>CREATOR</p></Link>
                                        {/* <button>Creator</button> */}
                                    </div>
                                    <div className="main_section1_users">
                                    <Link className="link" to='/ThePhotopage/Home/Viewer'><p>VIEWER</p></Link>
                                        {/* <button>Viewer</button> */}
                                    </div>
                                </div>

                        }

                    </section>

                </article>
            </main>
            <footer></footer>
        </div>
    )
}

export default HomePage