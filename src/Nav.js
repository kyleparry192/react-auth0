import React from "react"
import {Link} from "react-router-dom";

function Nav(props) {
    const {isAuthenticated, login, logout} = props.auth;

    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <button onClick={isAuthenticated() ? logout : login}>
                        {isAuthenticated() ? "Log Out" : "Log In"}
                    </button>
                </ul>
            </nav>
        </>
    );
}

export default Nav;