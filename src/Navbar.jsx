import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = (() => {

    return(
        <div>
            <nav className="pa3 pa4-ns">
                <Link className="link dim gray f6 f5-ns dib mr3" to='/'>Főoldal</Link>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to='/mermesek'>Az magyar érmesek</NavLink>
            </nav>


        </div>
    )
}
)
export default Navbar