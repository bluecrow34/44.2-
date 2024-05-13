import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import LoginForm from "./Routes/LoginForm";
import SignupForm from "./Routes/SignupForm";
import ProfileForm from "./Routes/ProfileForm";
import CompanyList from "./Companies/CompanyList"
import JobList from "./Jobs/JobList";
import CompanyDetail from "./Companies/CompanyDetail";
import PrivateRoute from "./Routes/PrivateRoute";



function RoutesList({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );
  
    return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <PrivateRoute exact path="/companies">
            <CompanyList />
          </PrivateRoute>

          <PrivateRoute exact path="/jobs">
            <JobList />
          </PrivateRoute>

          <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>
              
          <Redirect to="/" />
          </Switch>
        </div>
    );
  }
  
  
  export default RoutesList;
  