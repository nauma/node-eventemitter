class GroupEventEmitters {
	constructor (eventEmitters = []) {
		this.eventEmitters = eventEmitters
	}

	add (ee = null) {
		if (!ee) return this
		if (Array.isArray(ee)) {
			ee.map(e => this.eventEmitters.push(e))
		} else {
			this.eventEmitters.push(ee)
		}
		return this
	}

	get (name = null) {
		if (!name) throw new Error(`EventEmitter '${name}' is empty`)

		for (let i = 0; i < this.eventEmitters.length; i++) {
			if (this.eventEmitters[i].name === name) return this.eventEmitters[i]
		}

		throw new Error(`EventEmitter '${name}' not found`)
	}
}

module.exports = GroupEventEmitters
