const ee = require('./dist')

const app = new ee.GroupEventEmitters()

const rest = new ee.EventEmitter('rest')
const database = new ee.EventEmitter('database')

app
	.add(rest)
	.add(database)
	// .add([rest, database])

app.get('rest')
	.on('kek')
	.then(response => {
		console.log('in →', response.data)
		response.reply({ lol: 'aruuuu' })
	})

app.get('rest')
	.emit('kek', { kek: 'lol' })
	.then(data => {
		console.log('reply →', data)
	})
