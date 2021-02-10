import React from "react"
import {Link} from "react-router-dom"

function Home(props) {
    return (
        <>
            <h1>Home</h1>
            {props.auth.isAuthenticated()
                ? <Link to={"/profile"}>View Profile</Link>
                : <button onClick={props.auth.login}>Login</button>
            }
        </>
    );
}

;

export default Home;