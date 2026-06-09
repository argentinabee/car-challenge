// Part One - Vehicle Class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

// Part Two - Car Class
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part Three - Motorcycle Class
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

// Part Four - Garage Class
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  add(vehicle) {
    // Check if the item is a Vehicle
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }

    // Check if garage is full
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }

    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}
