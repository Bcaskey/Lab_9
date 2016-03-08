
var Vehicle = function() {
    this.value = null;
    this.div = null;
}

Vehicle.prototype.insert = function() {
    console.log('inside vehicle insert');
    this.div = document.createElement('div');
    this.div.className = 'myVehicle';
    this.div.style.backgroundColor = 'red';
    this.div.style.width = '140px';
    this.div.style.height = '100px';
    this.div.style.position = 'absolute';
    // this.div.style.left = '200px';
    // this.div.style.top = '200px';
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    this.div.style.left = Math.floor(Math.random() * (ww - 140)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (wh - 100)) + 'px';
    console.log(Math.floor(Math.random() * ww) - 140);
    //this.style.left = ;
    //this.style.top = ;
    this.move;
    document.getElementById('gameArea').appendChild(this.div);
}

Vehicle.prototype.move = function() {
}

Vehicle.prototype.move = function() {
    this.div = $('.myVehicle');
    // this.div = document.getElementsByClassName('myVehicle');
    var ww = window.innerWidth;
    this.div.animate({left: ww + 'px'}, 5000);
}

var vehicleArray = [];

function newVehicle() {
    Vehicle.call(this);
    var vehicle = new Vehicle();
    vehicle.insert();
    vehicleArray.push(vehicle);
}

function startGame() {
    for (var i = 0; i < vehicleArray.length; i++) {
        vehicleArray[i].move();
    }
}


// .myVehicle {
//     width: 140px;
//     height: 100px;
//     background-color: red;
//     font-family: Arial, Helvetica, sans-serif;
//     color: #000;
//     font-size: 30px;
//     line-height: 60px;
//     text-align: center;
//     padding-top: 0px;
//     margin: 4px;
//     border: 1px solid #000;
//     border-radius: 5px;
//     -moz-border-radius: 5px;
//     -webkit-border-radius: 5px;
//     position: absolute;
//     left: 0px;
//     top: 0px;
// }