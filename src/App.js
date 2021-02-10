import React from "react"
import {Route} from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import NavBar from "./Nav";
import Auth from "./auth/Auth";
import Callback from "./Callback";

function App(props) {
    const auth = new Auth(props.history)

    return (
        <>
            <NavBar/>
            <div>
                <Route
                    exact
                    path={"/"}
                    render={props => <Home auth={auth}{...props}/>}
                />
                <Route
                    exact
                    path={"/callback"}
                    render={props => <Callback auth={auth}{...props}/>}
                />
                <Route exact path={"/profile"} component={Profile}/>
            </div>
        </>
    )
}

export default App