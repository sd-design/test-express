import Router  from 'express'
const router = Router()

router.get('/api/server', (req, res) => {
	res.json({api: 'version 1.0'})
})
export default router