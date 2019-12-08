const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' }
];

// Variável que contem todas as idades dos usuários
const ages = users.map(function(item) {
  return item.age;
});

console.log(ages);

//  Usuários que trabalham na Rocketseat e com mais de 18 anos
const filter = users.filter(function(item) {
  return item.company === 'Rocketseat' && item.age > 18;
});

console.log(filter);

//  Usuário que trabalhe na empresa Google
const find = users.find(function(item) {
  return item.company === 'Google';
});

console.log(find);

// Multiplicar idade de todos usuários por dois e depois realizar um filtro nos usuários que possuem
// no máximo 50 anos
const result = users
  .map(function(item) {
    return item.age * 2;
  })
  .filter(function(item) {
    return item <= 50;
  });

console.log(result);
