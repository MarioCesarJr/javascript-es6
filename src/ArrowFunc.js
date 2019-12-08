// Funções convertidas em Arrow Functions

const arr = [1, 2, 3, 4, 5];

const map = arr.map(function(item) {
  return item + 10;
});

const mapArrow = arr.map(item => item + 10);

console.log(map);
console.log(mapArrow);

const user = { name: 'Diego', age: 23 };

function showAge(user) {
  return user.age;
}

const showAgeArrow = user => user.age;

console.log(showAge(user));
console.log(showAgeArrow(user));

const name = 'Diego';
const age = 23;

function showUser(name = 'Diego', age = 18) {
  return { name, age };
}

console.log(showUser(name, age));
console.log(showUser(name));

const showUserArrow = (name = 'Diego', age = 18) => {
  return { name, age };
};

console.log(showUserArrow(name, age));
console.log(showUserArrow(name));

const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  });
};

const promiseArrow = () => new Promise((resolve, reject) => resolve());

console.log(promise());
console.log(promiseArrow());
