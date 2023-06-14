/* eslint-disable no-undef */
import React, { useState } from "react";
import Creator_home_footer from "./Creator_home_footer";
import "./Creator_home.scss"
import Creator_home_header from "./Creator_home_header";


function Creator_home() {

    const [shootType, setShootType] = useState()

    const handleShootType = (event) => {
        setShootType(event.target.value)
    }

    return (
        <>
        <body className="creatorbody">
            <header>
                <Creator_home_header />
            </header>
            <main>
                <p>{shootType}</p>
                <section>
                    <div>
                    <form onChange={handleShootType}>
                        <label for="shoot type">Choose a type:</label>
                        <select name="cars" id="cars">
                        <option value="">None</option>
                            <option value="WildLife">WildLife</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Baby Shoot">Baby Shoot</option>
                            <option value="Maternity Shoot">Maternity Shoot</option>
                        </select>
                    </form>
                    </div>
                    <div>
                        <input type='text' placeholder='Details (example : Tiger Photography in Indian 
                            National Parks. Tiger is the most fascinating and the largest cat. Seeing a 
                            tiger in the wild is a dream for many wildlife enthusiasts. Photographing or 
                            filming one is on every wildlife photographer’s wish-list. With their numbers
                            decreasing and restrictions in the parks, Seeing a tiger in the wild is difficult.
                            Getting a good photograph of a wild tiger takes it to another level of difficulty.
                            It involves a lot of expertise, talent, intuition, and lots of preparation and luck.
                            At wildlife photo tours, we take care of all the aspects of planning involved, 
                            so our guests can focus on photography & art.)' ></input>
                    </div>
                </section>
            </main>
            <footer>
                <Creator_home_footer />
            </footer>
        </body>
        </>
    )
}

export default Creator_home