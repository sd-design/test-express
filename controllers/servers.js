let servers = [
	{id: '1', name: 'AWS', status: 'working'},
	{id: '2', name: 'Google Cloud', status: 'working'},
	{id: '3', name: 'Yandex Cloud', status: 'working'},
	{id: '4', name: 'Azure Cloud', status: 'working'},
	{id: '5', name: 'SberCloud', status: 'working'},
]

export const getAll = (req, res) => {
	res.status(200).json(servers)
}
