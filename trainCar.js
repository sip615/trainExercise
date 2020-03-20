import Train from "./train"
//TrainCar class is a child class that extends from its parent Train class
class TrainCar extends Train{
    //This is a child class of train, therefore the name property 
    //is retrieved from the parent class using 'super.'
    super(name)
    constructor(type, weight){
        //set the initial values and make sure they're not publically available using "._"
        //When creating an instance of the TrainCar class, we'll pass the 'type' and 'weight' arguments when we create new TrainCars.
        this._name = name;
        this._type = type;
        this._weight = weight;
    }
    //We use a setter to set the weight of the train car.
    set theWeight(value){
        this._weight = value;
    }
    //We use a getter to retrieve the weight of the train car.
    get getTheWeight(){
        return this._weight;
    }
}

export default TrainCar;

