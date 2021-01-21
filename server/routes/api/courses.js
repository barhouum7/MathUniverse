import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Okay Its Works!')
})

export default router