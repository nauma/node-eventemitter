class EventEmitter {
	constructor (name = false) {
		this.name = name
		this.events = []
	}

	on (name) {
		return new Promise(resolve => {
			this.events.push({ name, resolve })
		})
	}

	emit (name, data) {
		let promise = new Promise(resolve => {})

		this.events.map(event => {
			if (name === event.name) {
				promise = new Promise(resolve => {
					event.resolve({ data, reply: (data) => resolve(data) })
				})
			}
		})
		return promise
	}

	removeEventListener (name) {
		this.events.map((event, i) => {
			if (event.name === name) this.events.splice(i, 1)
		})
		return this
	}
}

module.exports = EventEmitter
