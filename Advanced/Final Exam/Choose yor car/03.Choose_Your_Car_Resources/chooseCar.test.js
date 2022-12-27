const {assert} = require('chai');
const {chooseYourCar} = require('./chooseYourCar');

describe('Test choose yor car', ()=>{
    describe('choosingType' ,()=>{
        it('should check if year is valid',()=>{
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'Red', 1800), 'Invalid Year!');
        });
        it('should check if Type is different from Sedan',()=>{
            assert.throw(()=> chooseYourCar.choosingType('Coupe', 'Red', 2010), 'This type of car is not what you are looking for.');
        });
        it('should meet the requirements to pick car', ()=>{
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2015), 'This Blue Sedan meets the requirements, that you have.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2010), 'This Blue Sedan meets the requirements, that you have.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2008), 'This Sedan is too old for you, especially with that red color.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2009), 'This Sedan is too old for you, especially with that red color.');
        });
    });
    describe('brandName', ()=>{
        it('should check if input is valid', ()=>{
            assert.throw(()=> chooseYourCar.brandName('BMW', 0), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.brandName({}, 0), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.brandName(['BMW'], 5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.brandName('BMW', 'pesho'), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.brandName(['BMW'], 'gosho'), 'Invalid Information!');
        });
        it('should return string of changed array', ()=>{
            assert.equal(chooseYourCar.brandName(['Honda', 'Toyota', 'Lexus', 'Mazda'], 3), 'Honda, Toyota, Lexus');
        });
    });
    describe('carFuelConsumption', ()=>{
        it('should check if input is valid', ()=>{
            assert.throw(()=> chooseYourCar.carFuelConsumption('str', 5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption(6, 'str'), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption('str', 'pesho'), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption(-5, 5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption(9, -5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption(-200, -5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption({}, -5), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption([], {}), 'Invalid Information!');
            assert.throw(()=> chooseYourCar.carFuelConsumption(-200, {}), 'Invalid Information!');
        });
        it ('should calcule if consumption litters are under 7', ()=>{
            assert.equal(chooseYourCar.carFuelConsumption(400, 20), `The car is efficient enough, it burns ${((20/400)*100).toFixed(2)} liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(1000, 70), `The car is efficient enough, it burns ${((70/1000)*100).toFixed(2)} liters/100 km.`);
        });
        it('should calcule if consumption litters are above 7', ()=>{
            assert.equal(chooseYourCar.carFuelConsumption(400, 100), `The car burns too much fuel - ${((100/400)*100).toFixed(2)} liters!`);
            assert.equal(chooseYourCar.carFuelConsumption(1000, 71), `The car burns too much fuel - ${((71/1000)*100).toFixed(2)} liters!`);
        });
    });
})