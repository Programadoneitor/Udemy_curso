interface person {
  name: string;
  age: number;
  isActive boolean;
}
  
let lenin: person = {
  nombre: 'Lenin',
  edad: 20
  isActive: true,
};

let ana: person = {
  nombre: 'Ana',
  edad: 33,
  isActive: true,
};

let personas: person = [lenin, ana];

for( let i = 0; i < personas.length; i++){
  let person = personas[i];
  console.log(person.name + ' ' + person.age);
}
