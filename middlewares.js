import colors from 'colors'
export function requestTime (req, res, next) {
	let d = new Date()
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	req.requestTime = d.toLocaleDateString('ru-RU', options)

	next()
}

export function logger (req, res, next) {
	console.log(colors.bgGreen.black(`log.time: ${req.requestTime}`))
	next()
}

export function myHeader (req, res, next) {
  res.setHeader("X-Powered-By", "Solovey app");
  next();
}