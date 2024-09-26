const object = {
    name: 'alice',
    age: 13
}

const sObject = JSON.parse(JSON.stringify(object));

console.log(object);
console.log(sObject);

sObject.age = 15;
console.log(sObject);