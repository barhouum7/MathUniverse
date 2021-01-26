import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

/**
 ************* Front-End Libraries ******************
 * I'm using axios for making API Requests.
 * moment is a Library which will allows me working with time and date.
 * I will use react-file-base64 to convert images.
 * redux-thunk is used for asynchronous actions using redux.
 */

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
