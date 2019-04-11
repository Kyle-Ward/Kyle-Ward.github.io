// Object spread operator (...)
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}
const { tiger, lion, ...rest } = animals;