import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Okay Its Works! 333333333333333')
})

export default router