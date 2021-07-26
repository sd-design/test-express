import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()

const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))
console.log(app.get('views'))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)
// app.get('/', (req, res) => {
// 	//res.send('<h1>Hi Express</h1>')
// 	res.status(200).sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
// app.get('/download', (req, res) => {
// 	//res.send('<h1>Hi Express</h1>')
// 	console.log(req.requestTime)
// 	res.download(path.resolve(__dirname, 'static', 'index.html'))
// })


app.get('/', (req, res) => {
	//res.send('<h1>Hi Express</h1>')
	res.status(200).render('index', {title: 'Express app - Main page', active: 'main'})
})
app.get('/features', (req, res) => {
	//res.send('<h1>Hi Express</h1>')
	res.status(200).render('features', {title: 'Features page', active: 'features'})
})

app.listen(port, ()=>{
	console.log(`Server was started on ${port} port....`)
})

