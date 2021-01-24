import courseModel from '../models/courses.js'

export const getCourses = async (req, res) => {
    try {
        const allCourses = await courseModel.find()
        res.status(200).json(allCourses) // 200 Which means successful..
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createCourse = async (req, res) => {
    const course = req.body // Post Requests enable us to use req.body which will get it from the FRONT-END Logic

    const newCourse = new courseModel(course)
    try {
        await newCourse.save() // await it because its an asynchronous function and takes time..
        res.status(201).json(newCourse) // 201 Which means that a successful Creation..
    } catch (error){
        // A useful Link for http Status Codes: https://restapitutorial.com/httpstatuscodes.html
        res.status(409).json({
            message: error.message
        })
    }
    
}