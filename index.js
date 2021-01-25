/**
 ************* Back-End Libraries ******************
 * bodyParser: To enable us send Post Requests. Which is going to make it incredibly easy for us to access 
the different elements from our actual server..
 * cors: To enable Cross origin requests.
 * express: Our NodeJs Server Framework and For creating the routing of our app.
 * mongoose: To create models for the BD.
 */

/* Here in order to load that Variable inside dotenv file
    we just do a simple check If we are 
    running in the production environment or Not... */
import dotENV from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    dotENV.config()
}

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose' /* Import Mongoose from The Mongoose Library that is installed already using NPM */
import path from 'path'

// const { instructorsRoutes, studentsRoutes, coursesRoutes } = require('./routes/api/index.js')
import instructorsRoutes from './routes/api/instructors.js'
import studentsRoutes from './routes/api/students.js'
import coursesRoutes from './routes/api/courses.js'



const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
/* ********************Now Make Express Use our ROutes******************* */
app.use('/api/instructors', instructorsRoutes)
app.use('/api/students', studentsRoutes)
app.use('/api/courses', coursesRoutes)



if (process.env.NODE_ENV === 'production') {
    // Serve the static files from the React app
    // app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.use(express.static('client/build'))
    // Handles any requests that don't match the ones in the routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname+'/client/build/index.html'))
    // })
}

/** Now Connecting Our server app to a Cloud DataBase which is MongoDB Atlas VIa Mongoose */

/* Here we want to set up our connection
        to be dependent upon our environment
        because when we're developing we want
        mongoose to connect to our local mongoDB Server
        BUT when we have our app deployed we want to
        connect it to a server that's on the web 
        somewhere so in here we're going to pass
        a string for the URL which going to come from 
        our environment Variables.. */
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    /* Options for how we want to set up 
       our MongoDB inside of our application.. */
}) /** Since this returns a promise we can use .then and .catch */
.then(() => app.listen(PORT, () => console.log(`\nConnected successfully to Mongoose.\n\nServer is listening on PORT: ${PORT}\n`)))
.catch((error) => console.log(error.message))


/***********************WE CAN USE THIS METHOD ALSO**************************** */
// const db = mongoose.connection /* Access the connection here.. */
// /* Here we just log if we're or are not connected to our database. */
// db.on('error', error => console.log(error))
// db.once('open', () => console.log('Connected successfully to Mongoose.'))

// app.listen(PORT, (error) => {
//     error ?
//         console.log(`\nERROR! Something Went Wrong.\n`) :
//         console.log(`\nServer is listening on PORT: ${PORT}\n`)
// }) /* Telling to our App that we want to Listening on Certain PORT */


/** Okay the following LOC is just for make sure that we don't get any WARNINGS in the console.*/
mongoose.set('useFindAndModify', false)