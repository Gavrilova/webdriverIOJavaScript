let x=9;
let w, y, z;
y = 2;
z = 38;
w = y + z;
let sum = y + z;
let fabricFl = "Flannel";
let fabricSt = 'Suiting';
let lengthFl = fabricFl.length;
const fabricArray = [fabricFl, "Chiffon"];
let firstFabric = fabricArray[0];
let secondFabric = fabricArray[1];
let fabricYdName = 3 + 'Chiffon';
let fabricYdNameString = "3" + "Chiffon";
let fabricSumYdName = 3 + 5 + "Chiffon";        //8Chiffon
let fabricYdSumNameString = "Chiffon" + 3 + 82; //Chiffon382

function priceOfFabric (qt, pricePerYd) {
    return qt * pricePerYd;
}
let result = priceOfFabric(x ,y);

priceOfFabric(5, 45);
function printFabricNames(firstFabric, secondFabric){
    console.log(firstFabric);
    console.log(secondFabric);
}
console.log(firstFabric);
console.log(fabricYdName, fabricYdNameString, fabricSumYdName, fabricYdSumNameString);
console.log(result);
console.log(priceOfFabric(y,z));
printFabricNames(firstFabric, secondFabric);
printFabricNames("Organza", "Gauze");
printFabricNames(firstFabric, secondFabric);
printFabricNames(fabricArray[0], fabricArray[1]);





