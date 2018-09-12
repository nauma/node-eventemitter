class EventEmitter {
	constructor (name = false) {
		this.name = name
		this.events = []
	}

	on (name, callback) {
		this.events.push({ name, callback })
		return this
	}

	emit (name, data) {
		data = data || {}
		let promise = new Promise((resolve, reject) => {})

		for (let i = this.events.length-1; i >= 0; i--) {
		    let event = this.events[i]

            if (name === event.name) {
                promise = new Promise((resolve, reject) => {
                    event.callback({ data, reply: (data) => resolve(data), replyErr: (data) => reject(data) })
                })
            }
        }
		return promise
	}

	removeEventListener (name) {
	    for (let i = this.events.length-1; i >= 0; i--) {
	        let event = this.events[i]
            if (event.name === name) this.events.splice(i, 1)
        }
        
		return this
	}
}

module.exports = EventEmitter
