import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../Auth/UserContext";


function Homepage(){
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser)

    return (
        <div className="Homepage">
            <h1>Jobly</h1>
            <p>Find your newest job here!</p>
            {currentUser ? (
                <h2>Welcome Back, {currentUser.username}!</h2>
                
            ) : (
                <p>
                    <Link to="/login">Log In</Link>
                    <br/>
                    <Link to="/signup">Sign Up</Link>
                </p>
            )}
        </div>
    );
}


export default Homepage;