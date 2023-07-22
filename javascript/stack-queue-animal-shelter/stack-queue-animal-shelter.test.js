const AnimalShelter = require('./stack-queue-animal-shelter');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue a cat', () => {
    const cat = { name: 'Luna', species: 'cat' };
    shelter.enqueue(cat);
    expect(shelter.cats.length).toBe(1);
    expect(shelter.dogs.length).toBe(0);
  });

  test('should enqueue a dog', () => {
    const dog = { name: 'Max', species: 'dog' };
    shelter.enqueue(dog);
    expect(shelter.dogs.length).toBe(1);
    expect(shelter.cats.length).toBe(0);
  });

  test('should dequeue a cat', () => {
    const cat1 = { name: 'Luna', species: 'cat' };
    const cat2 = { name: 'Milo', species: 'cat' };
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    const dequeuedCat = shelter.dequeue({ species: 'cat' });
    expect(dequeuedCat).toEqual(cat1);
    expect(shelter.cats.length).toBe(1);
  });

  test('should dequeue a dog', () => {
    const dog1 = { name: 'Max', species: 'dog' };
    const dog2 = { name: 'Bella', species: 'dog' };
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    const dequeuedDog = shelter.dequeue({ species: 'dog' });
    expect(dequeuedDog).toEqual(dog1);
    expect(shelter.dogs.length).toBe(1);
  });

  test('should return null if preference is neither dog nor cat', () => {
    const dog = { name: 'Max', species: 'dog' };
    shelter.enqueue(dog);
    const dequeuedAnimal = shelter.dequeue({ species: 'bird' });
    expect(dequeuedAnimal).toBeNull();
  });
});
