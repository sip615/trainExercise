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
	buildTrain(trainCar) {
		if (this._cars.length <= 30) {
			this._cars.append(trainCar);
		} else {
			console.log("The train is either too long, sorry!");
		}
	}
	clipTrain() {
		if (this._cars.length >= 0) {
			this._cars.splice(-1, 1);
		} else {
			console.log("The train is too short to remove a car");
		}
	}
}
