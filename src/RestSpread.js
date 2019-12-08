// REST
const arr = [1, 2, 3, 4, 5, 6];

const [a, ...b] = arr;

const x = a;
const y = b;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function sum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3

// SPREAD
const user = {
  name: 'Diego',
  age: 23,
  address: {
    city: 'Rio do Sul',
    uf: 'SC',
    country: 'Brasil'
  }
};

const user2 = { ...user, name: 'Gabriel' };

console.log(user2);

const user3 = { ...user, address: { city: 'Lontras' } };

console.log(user3);
