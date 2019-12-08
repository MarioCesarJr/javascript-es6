const company = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC'
  }
};

const {
  name,
  address: { city, state }
} = company;

console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(state); // SC

function showInfo(user) {
  return `${user.name} tem ${user.age} anos.`;
}

console.log(showInfo({ name: 'Diego', age: 23 }));

function showInfoDestructuring({ name, age }) {
  return `${name} tem ${age} anos.`;
}

console.log(showInfoDestructuring({ name: 'Diego', age: 23 }));
