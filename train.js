class Train {
	constructor(name) {
		//Name the train, because I feel like trains should have names...
		this._name = name;
		//initialize an empty array in each instance of the Train class, to which TrainCars will be added.
		this._cars = [];
	}
	//I wrote this getter for testing purposes while I was coding. If you can still see it, then I forgot to remove it.
	get name() {
		return this._name;
	}
	//This getter allows us to see the array of cars on the train.
	get cars() {
		return this._cars;
	}
	get trainLength() {
		return this._cars.length;
	}
	//The following method will be used to build the train after both the train and traincars have been instantiated.
	buildTrain(trainCar) {
		//Make sure the train doesn't get longer than 30 cars long
		if (this._cars.length < 30) {
			//Add the trainCar you've passed into the method.
			this._cars.push(trainCar);
		} else {
			//display the error message
			console.log("The train is too long, sorry!");
		}
	}
	clipTrain() {
		//Make sure the train is longer than 0
		if (this.cars.length > 0) {
			//If so, then take off 1 car from the end of the array (index -1)
			this._cars.pop();
		} else {
			//If the train is not greater than 0 cars long, log the following error message.
			console.log("The train is too short to remove a car");
		}
	}
	prependTrain() {
		if (this.cars.length < 30) {
			//If the train stays less than 30 cars
			this.cars.unshift();
		} else {
			//if the train is already at the maximum length, log the following error message.
			console.log("The train is already as long as it can be");
		}
	}
	justTheFront() {
		if (this.cars.length > 0) {
			//make sure the train is at least one car long before adding a new
			this.cars.shift();
		} else {
			//if the train doesn't have any cars, log the following error
			console.log("The train doesn't have any cars to remove");
		}
	}

	totalTrainWeight() {
		const weightTotal = this._cars.reduce((prev, cur) => {
			return prev + cur._weight;
		}, 0);
	}
}

//=======================================================================

class TrainCar {
	constructor(type, weight) {
		//set the initial values and make sure they're not publically available using "._"
		//When creating an instance of the TrainCar class, we'll pass the 'type' and 'weight' arguments when we create new TrainCars.
		this._type = type;
		this._weight = weight;
	}
	//We use a setter to change the weight of the train car.
	set theWeight(value) {
		return (this._weight = value);
	}
	//We use a getter to retrieve the weight of the train car.
	get getTheWeight() {
		return this._weight;
	}
}

//==========================================================================

//The below is an example of the above code in action. All the results are written to log to the console in the browser.

//create a new instance of TrainCar called boxcarOne
const boxcarOne = new TrainCar("boxcar", 25);

//Show us what the weight of boxcarOne is
console.log(boxcarOne.getTheWeight);

//Set the weight of boxcarOne to something else, 35 for example
boxcarOne.theWeight = 35;

//Show us what the new weight is
console.log(boxcarOne.getTheWeight);

//make several new instances of trainCar to create a series of cars.
const cabooseOne = new TrainCar("caboose", 14);
const tankerOne = new TrainCar("tanker", 109);

//now make your train using the Train class
const freightExpress = new Train("Freight Express");
console.log(freightExpress);

//Add boxcarOne to the train
freightExpress.buildTrain(boxcarOne);
//show us that boxcarOne was added to the train by console logging the cars array
console.log(freightExpress.cars);

//Add cabooseOne to the train
freightExpress.buildTrain(cabooseOne);
//show us that cabooseOne was added to the train by console logging the cars array
console.log(freightExpress.cars);

//remove cabooseOne from the train
freightExpress.clipTrain();
//show us that cabooseOne was removed from the train
console.log(freightExpress.cars);

//add cabooseOne and tanker to the train and then show us that they were added
freightExpress.buildTrain(cabooseOne);
freightExpress.buildTrain(tankerOne);
console.log(freightExpress.cars);
console.log(freightExpress.totalTrainWeight());

//Check to see how long the train is
console.log(freightExpress.trainLength());

//now keep removing cars until there are no more cars left on the train
freightExpress.clipTrain();
freightExpress.clipTrain();
freightExpress.clipTrain();
freightExpress.clipTrain(); //after this one, the error message will appear in the console.
console.log(freightExpress);

//==========================================================================
//The below is an example of how the trainCar class can be used to make a different type of train car
//New types of train car classes can be made as children of the trainCare parent class.

class PassengerCar extends TrainCar {
	constructor(weight, passCapacity) {
		super(weight);
		this._passCapacity = passCapacity;
		this._isfull = false;
	}
	toggleIsFull() {
		this._isfull = !this._isfull;
	}
}
