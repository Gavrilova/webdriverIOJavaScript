const fabricObject = {
    type: "Linen",
    price: 10.99,
    color: "Prussian Blue",
    care: "Dry Clean",
    availableYd: 7
};

let fabricColor = fabricObject.color;
console.log(fabricColor);

let fabricType = fabricObject["type"];
console.log(fabricType);

let isEqual = false;
isEqual = 5 === '5';
console.log(isEqual);

let isAvailable = fabricObject.availableYd > 0;
if (fabricObject.price > 10  && isAvailable === true) console.log("Price is expensive!");

let someString = "thisissomestringforexamplestring";
console.log(someString);
someString.slice(2,5);
console.log(someString.slice(2,5));

let text = '';
const fabric = ["Knits", "Suiting", "Wool", "Voile", "Organza", "Chiffon"];
for (let i = 0; i < fabric.length; i++) {
    text += fabric[i] + " ";
}
console.log(text);

text = '';
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + " ";
}
console.log(text);

for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0 ) {
        console.log(i);
    }
}