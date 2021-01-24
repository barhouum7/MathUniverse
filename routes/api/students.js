import express from 'express'
import { getStudents } from '../../controllers/students.js'

const router = express.Router()

router.get('/', getStudents)

export default router