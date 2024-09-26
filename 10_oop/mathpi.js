const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);   //cant be override

const coffee = {
    name: 'ginger coffee',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("coffee nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, 'name', {
    // writable: false,
    enumerable: true,
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}