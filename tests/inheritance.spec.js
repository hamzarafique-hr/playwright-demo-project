class Car{
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for ' + this.name);
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }
}

class Toyota extends Car{
    carSpeed(speed){
        console.log('Top Speed for  this ' +this.name+' is '+speed+ 'km/h');
    }
}

let myCar = new Toyota();
myCar.setName("Toyota Camry");
myCar.startEngine();
myCar.stopEngine();
myCar.carSpeed(180); // Output: Top Speed for this Toyota Camry is 180 km/h