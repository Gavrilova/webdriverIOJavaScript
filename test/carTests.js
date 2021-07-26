import {Car} from './car.js';

describe('my Car test suite',
    () => {
        it('car should be able to turn, stop, drive and verify age', function () {
            let myFirstCat = new Car("Mercedes", 2002);
            let mySecondCar = new Car("Tahoe", 2002);
            let myThirdCar = new Car("Nissan", 1997);

            myFirstCat.turnLeft();
            myFirstCat.stop();
            mySecondCar.turnRight();
            mySecondCar.stop();
            myThirdCar.drive();
            myThirdCar.age();
        });
    });


