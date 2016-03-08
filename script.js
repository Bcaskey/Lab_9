// Super Class start ---------------------------------------------------
var Vehicle = function(className) {
    this.div = document.createElement('div');
    this.div.className = className;
}

Vehicle.prototype.insert = function() {
    //this.div = document.createElement('div');
    //this.div.className = 'myVehicle';
    this.div.style.position = 'absolute';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    //console.log(Math.floor(Math.random() * ww) - 140);
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

function addVehicle() { 
    var vehicle = new Vehicle('myVehicle');
    vehicle.insert();
    vehicleArray.push(vehicle);
    console.log('inside vehicle');
}

// Super Class Stop ----------------------------------------------------

// Child Class CAR CAR CAR CAR CAR CAR CAR  ----------------------------
var Car = function () {
    Vehicle.call(this, 'myCar');
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; //This is the function that calls car
Car.prototype.insert = function() {
    //this.div = document.createElement('div');
    //this.div.className = 'myCar';
    this.div.style.position = 'absolute';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);

}
Car.prototype.move = function() {
    this.div = $('myCar');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

function addCar() {
    var addCar = new Car();
    addCar.insert();
    vehicleArray.push(addCar);
    console.log('inside car');
}

//Child Class COPCAR COPCAR COPCAR COPCAR COPCAR  ------------------------

var CopCar = function () {
    Vehicle.call(this, 'myCopCar');
}

CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;
CopCar.prototype.insert = function() {
    //this.div = document.createElement('div');
    //this.div.className = 'myCopCar';
    this.div.style.position = 'absolute';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);

}
CopCar.prototype.move = function() {
    this.div = $('.myCopCar');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

function addCopCar() {
    var vehicle = new CopCar();
    vehicle.insert();
    vehicleArray.push(vehicle);
    console.log('inside cop car');
}

// Child Class MOTORCYCLE MOTORCYCLE MOTORCYCLE  ------------------------

var Motorcycle = function () {
    Vehicle.call(this, 'myMotorcycle');
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle; //This is the function that calls car
Motorcycle.prototype.insert = function() {
    // this.div = document.createElement('div');
    // this.div.className = 'myMotorcycle';
    this.div.style.position = 'absolute';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
}
Motorcycle.prototype.move = function() {
    this.div = $('.myMotorcycle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

function addMotorcycle() {
    var vehicle = new Motorcycle();
    vehicle.insert();
    vehicleArray.push(vehicle);
    console.log('inside Motorcycle');
}

// Child Class TANK TANK TANK TANK TANK --------------------------------

var Tank = function () {
    Vehicle.call(this, 'myTank');
}

Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Motorcycle; //This is the function that calls car
Tank.prototype.insert = function() {
    // this.div = document.createElement('div');
    // this.div.className = 'myTank';
    this.div.style.position = 'absolute';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
}
Tank.prototype.move = function() {
    this.div = $('.myTank');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000); //Same as Vehicle speed
}

function addTank() {
    var vehicle = new Tank();
    vehicle.insert();
    vehicleArray.push(vehicle);
    console.log('inside Tank');
}

// END VEHICLES ---------------------------------

var vehicleArray = [];

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
