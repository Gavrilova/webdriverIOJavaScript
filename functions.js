function greet(name, lastName){
    console.log("Hello " + name + " " + lastName);
}
greet("Masha");
greet("Masha", "Gavrilova");

function greetings(name, lastName){
    return "Hello " + name + " " + lastName;
}

console.log("Irina", "Gavrilova");
console.log(greetings("Sarah", "Connor"));

const fabric = ["Knits", "Suiting", "Wool", "Voile"];
fabric.pop();
console.log(fabric);
fabric.push("ITY Knits");
console.log(fabric);
console.log(fabric[1])
fabric.shift();
console.log(fabric);
console.log(fabric[1]);
fabric.unshift("Linen");
console.log(fabric);



