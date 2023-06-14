import React, { useState } from "react";
import Viewer_footer from "./Viewer_footer";
import Viewer_header from "./Viewer_header";
import './Viewer.scss'
function Viewerhome() {
    return (
        <body className="viewerBody">
            <header>
                <Viewer_header></Viewer_header>
            </header>
            <main className="viewerMain">
                <section>
                    VIEWER
                </section>
            </main>
            <footer>    
                <Viewer_footer></Viewer_footer>
            </footer>
        </body>
    )
}

export default Viewerhome;