
class AnimalShelter{
  constructor() {
    this.dogs =[];
    this.cats =[];
  }

  enqueue(animal){
    if(animal.species === 'cat'){
      this.cats.push(animal);
    } else
    if(animal.species === 'dog'){
      this.dogs.push(animal);
    }
  }

  dequeue(pref){


    if (pref.species === 'cat') {
      return this.cats.shift();
    } else if (pref.species === 'dog') {
      return this.dogs.shift();
    } else return null;

  }

}
module.exports = AnimalShelter;
