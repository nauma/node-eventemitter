# EventEmitter

Using EventEmitter on node.js
Size: 1.27 Kb
`0` dependencies

# install

```js
npm i @nauma/eventemitter --save
```

# using
### require
```js
const ee = require('@nauma/eventemitter')
```

### create EventEmitter
```js
let rest = new ee.EventEmitter()
```

#### add events
```js
rest.on('todo', response => {
	console.log('in ->', response.data)
})
```

#### remove events
```js
rest.removeEventListener('todo')
```

#### emit data
```js
rest.emit('todo', { data: 'test-data' })
```

#### reply system
```js
rest.on('todo', response => {
	console.log('in ->', response.data)
	response.reply({ text: 'hello world' })
})

rest.emit('todo', { data: 'test-data' })
  .then(data => {
    console.log('reply ->', data)
  })
```

### EventEmitters group
```js
const app = new ee.GroupEventEmitters()

const rest = new ee.EventEmitter('rest')
const database = new ee.EventEmitter('database')

app
  .add(rest)
  .add(database)
  // .add([rest, database])

app.get('rest')
	.on('todo', response => {
		console.log('in ->', response.data)
		response.reply({ lol: 'aruuuu' })
	})

app.get('rest')
	.emit('todo', { kek: 'lol' })
	.then(data => {
		console.log('reply ->', data)
	})
```


License
----
Apache 2.0
