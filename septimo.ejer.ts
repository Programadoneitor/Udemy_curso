
let person ={
  nombre: 'Lenin',
  edad: 30,
  isActive: true,
  hobbies: ['voley','futbol']
  toString() {
    let objectString = this.nombre + ' ' + this.edad + ' ' + this.hobbies;
    console.log( objectString );
  }
}

person.toString();
