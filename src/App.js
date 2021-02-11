import React from "react"
import {Redirect, Route} from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Nav from "./Nav";
import Auth from "./auth/Auth";
import Callback from "./Callback";

function App(props) {
    const auth = new Auth(props.history)

    return (
        <>
            <Nav auth={auth}/>
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
                <Route
                    exact
                    path={"/profile"}
                    render={props =>
                        auth.isAuthenticated()
                            ? <Profile auth={auth}{...props}/>
                            : <Redirect to={"/"}/>
                    }
                />
            </div>
        </>
    )
}

export default App