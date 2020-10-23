const honda = {
    speed: '100kmph'
}

const tesla = {
    speed: 'Speed of light'
}

function getSpeed(){
    console.log(this.speed);
    this.mileage = 'great';
}

function getDetails(speed, mileage) {
    
        console.log(this[speed]);
        console.log(this[mileage]);
    
}

getSpeed.call(honda);
getSpeed.call(tesla);
console.log(honda.mileage);

getDetails.apply(honda, ['speed', 'mileage']);
getDetails.apply(civic, ['speed', 'mileage']);