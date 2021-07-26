export class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    drive(){
        console.log(this.name + "I'm driving");
    }

    stop(){
        console.log(this.name + " I'm stopping.");
    }

    turnLeft(){
        console.log(this.name + " I'm turning Left once.");
    }

    turnRight(){
        console.log(this.name + " I'm turning Right");
    }
}
//export default new Car();
