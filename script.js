
// Super Class start ---------------------------------------
var Vehicle = function() {
    this.value = null;
    this.div = null;
}

Vehicle.prototype.insert = function() {
    //console.log('inside vehicle insert');
    this.div = document.createElement('div');
    this.div.className = 'myVehicle';
    this.div.style.backgroundColor = 'red';
    this.div.style.width = '120px';
    this.div.style.height = '80px';
    this.div.style.position = 'absolute';
    // this.div.style.left = '200px';
    // this.div.style.top = '200px';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    console.log(Math.floor(Math.random() * ww) - 140);
    this.move;
    this.moveback;
    document.getElementById('gameArea').appendChild(this.div);
}

Vehicle.prototype.move = function() {
    this.div = $('.myVehicle');
    // this.div = document.getElementsByClassName('myVehicle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000);
}

Vehicle.prototype.moveback = function() {
    this.div = $('.myVehicle');
    // this.div = document.getElementsByClassName('myVehicle');
    var ww = window.innerWidth;
    this.div.animate({left: '10px'}, 5000);
}

// Super Class Stop ------------------------------------------

// Child Class Car Start --------------------------------------
var Car = function () {
    //Die.call(this, 'Hello');
    //this.value = num;
    console.log('inside car');
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; //This is the function that calls car
Car.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'myCar';
    //this.div.style.backgroundColor = 'red'; --Moved to CSS
}
Car.prototype.move = function() {
    this.div = $('.myVehicle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

//Child Class Car Stop, CopCar Start

var CopCar = function () {
    //Die.call(this, 'Hello');
    //this.value = num;
    console.log('inside cop car');
}

CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;
CopCar.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'myCopCar';
    // this.div.style.backgroundColor = 'blue'; --Moved to CSS
}
CopCar.prototype.move = function() {
    this.div = $('.myVehicle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

// Child Class CopCar Stop, Motorcycle Begin ---------------------------------------
var Motorcycle = function () {
    //Die.call(this, 'Hello');
    //this.value = num;
    console.log('inside Motorcycle');
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle; //This is the function that calls car
Motorcycle.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'myMotorcycle';
    //this.div.style.backgroundColor = 'red'; --Moved to CSS
}
Motorcycle.prototype.move = function() {
    this.div = $('.myMotorcycle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}
// Child Class Motorcycle Stop, Tank Begin ---------------------------------------
var Tank = function () {
    //Die.call(this, 'Hello');
    //this.value = num;
    console.log('inside Tank');
}

Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Motorcycle; //This is the function that calls car
Tank.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'myTank';
    //this.div.style.backgroundColor = 'red'; --Moved to CSS
}
Tank.prototype.move = function() {
    this.div = $('.myTank');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}
// Child Class Tank Stop. --------------------------

var vehicleArray = [];

// Function Calls for Button types --------------------------

// function newVehicle() { 
//     //Vehicle.call(this);
//     var vehicle = new Vehicle();
//     vehicle.insert();
//     vehicleArray.push(vehicle);
// }

function newCar() {
    //Vehicle.call(this);
    var vehicle = new Car();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

function newCopCar() {
    //Vehicle.call(this);
    var vehicle = new CopCar();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

function newMotorcycle() {
    //Vehicle.call(this);
    var vehicle = new Motorcycle();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

function newTank() {
    //Vehicle.call(this);
    var vehicle = new Tank();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

function startGame() {
    for (var i = 0; i < vehicleArray.length; i++) {
        vehicleArray[i].move();
    }
}

function reverse() {
    if (vehicleArray[i] instanceof Car){
            for (var i = 0; i < vehicleArray.length; i++) {
            vehicleArray[i].moveback();
        }
    }
}
// END Function calls for all Button types-------------------