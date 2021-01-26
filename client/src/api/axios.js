import axios from 'axios'

const coursesURL = 'http://localhost:5000/api/courses'

export const fetchCourses = () => axios.get(coursesURL)
