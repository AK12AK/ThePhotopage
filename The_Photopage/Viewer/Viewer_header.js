import React from "react";
import {Link} from "react-router-dom"

function Viewer_header() {
    return (
        <>
        header
        <Link to='/ThePhotopage/Home'><input type="button" value='Home'></input></Link>
        </>
    )
}

export default Viewer_header