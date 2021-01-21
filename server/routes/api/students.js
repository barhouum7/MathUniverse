import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Okay Its Works! 2222222222222')
})

export default router