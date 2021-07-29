describe('For loop', () => {

    it('should go over array values', () => {
        const myCars = ["firstCar", "secondCar", "3rdCar"]
        for (let i = 0; i < myCars.length; i++) {
            console.log(myCars[i]);
        }
    });

    it('should go over array values', () => {
        const myCars = ["firstCar", "secondCar", "3rdCar"]
        for (let i = 0; i <= myCars.length; i++) {
            console.log(myCars[i]);
        }
    });

});