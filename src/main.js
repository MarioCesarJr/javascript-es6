const arr = [1, 5, 8, 9, 10];

// pecorrer o vetor e mostrar uma nova informação
const newArr = arr.map(function(item) {
  return item * 2;
});

console.log(newArr);

// construir todo o vetor e transformar em uma única variavel/valor
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// filtrar ex: todos os números pares true/false
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

// verifica se existe uma informação no array
const find = arr.find(function(item) {
  return item === 5;
});

console.log(find);

// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();

//     this.user = 'Jhon';
//   }

//   showUser() {
//     console.log(this.user);
//   }

//   static sum(a, b) {
//     return a + b;
//   }
// }

// const MyList = new TodoList();

// document.getElementById('newTodo').onclick = function() {
//   MyList.add('New Todo');
// };

// MyList.showUser();

// console.log(TodoList.sum(3, 5));
