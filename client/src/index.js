/**
 ************* Front-End Libraries ******************
 * I'm using axios for making API Requests.
 * moment is a Library which will allows me working with time and date.
 * I will use react-file-base64 to convert images.
 * redux-thunk is used for asynchronous actions using redux.
 */
import React from "react"
import ReactDOM from "react-dom"
import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
// import reportWebVitals from './reportWebVitals'

import App from "./App"

import ui from "./store/reducers/ui"
import courses from "./store/reducers/courses"
import auth from "./store/reducers/auth"
import user from "./store/reducers/user"
import usersManager from "./store/reducers/usersManager"
import coursesManager from "./store/reducers/coursesManager"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  ui,
  auth,
  user,
  courses,
  usersManager,
  coursesManager,
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

const app = (
  <Provider store={store}>
    <SnackbarProvider preventDuplicate maxSnack={3}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
