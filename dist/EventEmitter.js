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
}

module.exports = EventEmitter
