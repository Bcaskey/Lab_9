// Super Class start ---------------------------------------------------
var Vehicle = function(className) {
    this.div = document.createElement('div');
    this.div.className = className;
}

Vehicle.prototype.insert = function() {
    this.div.style.position = 'absolute';
    this.div.id = 5;
    var boxText = this.div.id;
    this.div.innerHTML = boxText;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    this.move;
    document.getElementById('gameArea').appendChild(this.div);
    this.delete.call(this);// call(this) binds the function to this div. 
                           // move doesnt need the bind, because on click
                           // I am moving everything.    
}

Vehicle.prototype.move = function() {
    this.div = $('.myVehicle');
    var ww = window.innerWidth;
    function goRight() {
        $(".myVehicle").animate({
        left: ww
    }, 5000, function() {
        setTimeout(goLeft, 50);
    });
    }
    function goLeft() {
        $(".myVehicle").animate({
        left: 0
    }, 5000, function() {
        setTimeout(goRight, 50);
    });
    }
    setTimeout(goRight, 50);
}
// NOT that delete needs a bind of .call(this) above. Because we are deleteing
// on instance, not calling all like the move function.
Vehicle.prototype.delete = function() {
    this.div.onclick = function(e){
        var x = e.target.id;
        var y = x - 1;
        e.target.innerHTML = y;
        //damage = parseInt(damage, 10);
        if (x > 1) {
            var newID = x - 1;
            e.target.id = newID;
            //console.log(newID);
        } else {
         e.target.remove();
         //console.log('test');   
        }
    }
}

function addVehicle() { 
    var vehicle = new Vehicle('myVehicle');
    vehicle.insert();
    vehicleArray.push(vehicle);
}

// Super Class Stop ----------------------------------------------------

// Child Class CAR CAR CAR CAR CAR CAR CAR  ----------------------------
var Car = function () {
    Vehicle.call(this, 'myCar');
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; //This is the function that calls car
Car.prototype.insert = function() {
    this.div.style.position = 'absolute';
    this.div.id = 2;
    var boxText = this.div.id;
    this.div.innerHTML = boxText;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
    this.delete.call(this);
}

Car.prototype.move = function() {
    this.div = $('.myCar');
    var ww = window.innerWidth;
    function goRight() {
        $(".myCar").animate({
        left: ww
    }, 5000, function() {
        setTimeout(goLeft, 50);
    });
    }
    function goLeft() {
        $(".myCar").animate({
        left: 0
    }, 5000, function() {
        setTimeout(goRight, 50);
    });
    }
    setTimeout(goRight, 50);
}

Car.prototype.delete = function() {
    this.div.onclick = function(e){
        var x = e.target.id;
        var y = x - 1;
        e.target.innerHTML = y;
        //damage = parseInt(damage, 10);
        if (x > 1) {
            var newID = x - 1;
            e.target.id = newID;
            //console.log(newID);
        } else {
         e.target.remove();
         //console.log('test');   
        }
    }
}

function addCar() {
    var addCar = new Car();
    addCar.insert();
    vehicleArray.push(addCar);
    //console.log('inside car');
}

//Child Class COPCAR COPCAR COPCAR COPCAR COPCAR  ------------------------

var CopCar = function () {
    Vehicle.call(this, 'myCopCar');
}

CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;
CopCar.prototype.insert = function() {
    this.div.style.position = 'absolute';
    this.div.id = 3;
    var boxText = this.div.id;
    this.div.innerHTML = boxText;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
    this.delete.call(this);
}

CopCar.prototype.move = function() {
    this.div = $('.myCopCar');
    var ww = window.innerWidth;
    function goRight() {
        $(".myCopCar").animate({
        left: ww
    }, 5000, function() {
        setTimeout(goLeft, 50);
    });
    }
    function goLeft() {
        $(".myCopCar").animate({
        left: 0
    }, 1, function() {
        setTimeout(goRight, 50);
    });
    }
    setTimeout(goRight, 50);
}

CopCar.prototype.delete = function() {
    this.div.onclick = function(e){
        var x = e.target.id;
        var y = x - 1;
        e.target.innerHTML = y;
        //damage = parseInt(damage, 10);
        if (x > 1) {
            var newID = x - 1;
            e.target.id = newID;
            //console.log(newID);
        } else {
         e.target.remove();
         //console.log('test');   
        }
    }
}

function addCopCar() {
    var vehicle = new CopCar();
    vehicle.insert();
    vehicleArray.push(vehicle);
    //console.log('inside cop car');
}

// Child Class MOTORCYCLE MOTORCYCLE MOTORCYCLE  ------------------------

var Motorcycle = function () {
    Vehicle.call(this, 'myMotorcycle');
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle; //This is the function that calls car
Motorcycle.prototype.insert = function() {
    this.div.style.position = 'absolute';
    this.div.id = 1;
    var boxText = this.div.id;
    this.div.innerHTML = boxText;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 60)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 40)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
    this.delete.call(this);
}

Motorcycle.prototype.move = function() {
    this.div = $('.myMotorcycle');
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    function goRight() {
        $(".myMotorcycle").animate({
        left: ww,
        top: wh
    }, 5000, function() {
        setTimeout(goLeft, 50);
    });
    }
    function goLeft() {
        $(".myMotorcycle").animate({
        left: 0,
        top: 0
    }, 1, function() {
        setTimeout(goRight, 50);
    });
    }
    setTimeout(goRight, 50);
}

Motorcycle.prototype.delete = function() {
    this.div.onclick = function(e){
        var x = e.target.id;
        var y = x - 1;
        e.target.innerHTML = y;
        //damage = parseInt(damage, 10);
        if (x > 1) {
            var newID = x - 1;
            e.target.id = newID;
            //console.log(newID);
        } else {
         e.target.remove();
         //console.log('test');   
        }
    }
}

function addMotorcycle() {
    var vehicle = new Motorcycle();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

// Child Class TANK TANK TANK TANK TANK --------------------------------

var Tank = function () {
    Vehicle.call(this, 'myTank');
}

Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Motorcycle; 
Tank.prototype.insert = function() {
    this.div.style.position = 'absolute';
    this.div.id = 10;
    var boxText = this.div.id;
    this.div.innerHTML = boxText;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    document.getElementById('gameArea').appendChild(this.div);
    this.delete.call(this);
}
Tank.prototype.move = function() {
    this.div = $('.myTank');
    var wh = window.innerHeight;
    function goDown() {
        $(".myTank").animate({
        top: wh
    }, 10000, function() {
        setTimeout(goUp, 50);
    });
    }
    function goUp() {
        $(".myTank").animate({
        top: 0
    }, 1, function() {
        setTimeout(goDown, 50);
    });
    }
    setTimeout(goDown, 50);
}

Tank.prototype.delete = function() {
    this.div.onclick = function(e){
        var x = e.target.id;
        var y = x - 1;
        e.target.innerHTML = y;
        //damage = parseInt(damage, 10);
        if (x > 1) {
            var newID = x - 1;
            e.target.id = newID;
            //console.log(newID);
        } else {
         e.target.remove();
         //console.log('test');   
        }
    }
}

function addTank() {
    var vehicle = new Tank();
    vehicle.insert();
    vehicleArray.push(vehicle);
    //console.log('inside Tank');
}

// END VEHICLES ---------------------------------

var vehicleArray = [];

function startGame() {
    for (var i = 0; i < vehicleArray.length; i++) {
        vehicleArray[i].move();
    }
}
