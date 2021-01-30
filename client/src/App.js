import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "./store/actions"

import UserLayout from "./Layouts/Layout/userLayout"
// import ConnectionErrorHandler from "./Layouts/Error/errorHandler"

import Dashboard from "./containers/Dashboard/Dashboard"
import Auth from "./containers/Auth/Auth"
import Logout from "./containers/Auth/Logout/Logout"
import PageNotFound from "./containers/PageNotFound/PageNotFound"
import About from "./containers/Auth/About/About"

const RouteUser = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (
        <UserLayout>
          <Component />
        </UserLayout>
      )}
    />
  )
}

const App = ({ onTryAutoSignup }) => {
  
  

  useEffect(() => {
    onTryAutoSignup()
  }, [onTryAutoSignup])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* With Layout */}
        <RouteUser path="/" exact Component={Dashboard} />
        <RouteUser path="/about" exact Component={About} />
        <RouteUser path="/logout" Component={Logout} />
        {/* Without Layout */}
        <Route path="/sign-in" component={Auth} />
        <Route path="/sign-up" component={Auth} />
        {/* Page Not Found */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
  }

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)