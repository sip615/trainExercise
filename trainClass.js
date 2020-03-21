class Train {
	constructor(name) {
		//Name the train, because I feel like trains should have names...
		this._name = name;
		//initialize an empty array in each instance of the Train class, to which TrainCars will be added.
		this._cars = [];
	}
	//I wronte this getter for testing purposes while I was coding. If you can still see it, then I forgot to remove it.
	get name() {
		return this._name;
	}
	//This getter allows us to see the array of cars on the train.
	get cars() {
		return this._cars;
	}
	//The following method will be used to build the train after both the train and traincars have been instantiated.
	buildTrain(trainCar) {
		//Make sure the train is no longer than 30 cars long
		if (this._cars.length <= 30) {
			//Add the trainCar you've passed into the method.
			this._cars.append(trainCar);
		} else {
			//display the error message
			console.log("The train is either too long, sorry!");
		}
	}
	clipTrain() {
		//Make sure the train is longer than 0
		if (this._cars.length > 0) {
			//If so, then take off 1 car from the end of the array (index -1)
			this._cars.pop();
		} else {
			//If the train is not greater than 0 cars long, log the following error message.
			console.log("The train is too short to remove a car");
		}
	}
}

//export default Train;
