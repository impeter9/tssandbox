interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;
  // private name: string;
  // private email: string;
  // public age: number; // Property 'age' is private and only accessible within class 'User'.
  // protected age: number; // can access from User's inheritance

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created: ' + this.name);
  }

  register() {
    console.log(this.name + ' is now registered');
  }

  payInvoice() {
    console.log(this.name + ' paid invoice');
  }
}

// let john = new User('John Doe', 'john@gmail.com', 22);

// john.register();

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  // payInvoice() {
  //   super.payInvoice();
  // }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 44);

mike.payInvoice();
