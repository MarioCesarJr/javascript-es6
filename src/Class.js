class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  isAdmin() {
    if (this.admin === true) {
      return true;
    } else {
      return false;
    }
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('emailAdmin@teste.com', 'senha321');

console.log(User1.isAdmin()); // false
console.log(User1.email);

console.log(Adm1.isAdmin()); // true
console.log(Adm1.email);
