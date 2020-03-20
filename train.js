class Train {
	constructor(name) {
		this._name = name;
		this._cars = [];
	}
	get name() {
		return this._name;
	}
	get cars() {
		return this._cars;
	}
}
