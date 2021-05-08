class Employee {
   constructor(name, id, email) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.role = "employee";
   }

   getId() {
      return `<div>ID: ${this.id}</div>`;
   }

   getEmail() {
      return `<div>email: <a href='email:${this.email}'>${this.email}</a></div>`;
   }

   getRole() {
      return `<h3 class="card-title">Employee</h3>`;
   }

   getName() {
      return `<h3 card="card-title">${this.name}</h3>`;
   }

}

module.exports = Employee;