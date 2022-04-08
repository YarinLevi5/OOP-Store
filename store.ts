class Store {
  peoples: People[] = [];
  products: Product[] = [];
  static store: Store;

  static getSherdInstance(): Store {
    if (!Store.store) {
      Store.store = new Store();
    }
    return Store.store;
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
  addPeople(people: People) {
    this.peoples.push(people);
  }
}

let store = Store.getSherdInstance();

abstract class Product {
  id: number = 0;
  name: string = "";
  price: number = 0;
  company: string = "";
  constructor(id: number, name: string, price: number, company: string) {
    this.id = id;
    this.setName(name);
    this.getPrice(price);
    this.company = company;
  }

  setName(name: string) {
    if (name.length > 1) {
      this.name = name;
    } else {
      throw new Error("Name must be at least 2 characters");
    }
  }

  getPrice(price: number) {
    return (this.price = price);
  }
}

class Phone extends Product {
  constructor(id: number, name: string, price: number, company: string) {
    super(id, name, price, company);
  }
}
class Tablet extends Product {
  constructor(id: number, name: string, price: number, company: string) {
    super(id, name, price, company);
  }
}
class MusicPlayer extends Product {
  constructor(id: number, name: string, price: number, company: string) {
    super(id, name, price, company);
  }
}

class People {
  name: string = "";
  age: number = 0;
  gender: string = "";
  isNice: boolean = false;

  constructor(name: string, age: number, gender: string, isNice: boolean) {
    this.name = name;
    this.getAge(age);
    this.gender = gender;
    this.isNice = isNice;
  }

  getAge(age: number) {
    return (this.age = age);
  }
}

class Seller extends People {
  constructor(name: string, age: number, gender: string, isNice: boolean) {
    super(name, age, gender, isNice);
  }
}

class Client extends People {
  constructor(name: string, age: number, gender: string, isNice: boolean) {
    super(name, age, gender, isNice);
  }
}
class Interest extends People {
  constructor(name: string, age: number, gender: string, isNice: boolean) {
    super(name, age, gender, isNice);
  }
}
class Supplier extends People {
  constructor(name: string, age: number, gender: string, isNice: boolean) {
    super(name, age, gender, isNice);
  }
}

//Instance of product
let iphone = new Phone(1, "iphone8", 3000, "Ivory");
store.addProduct(iphone);

//Instance of people
let client = new Client("yarin", 21, "female", true);
store.addPeople(client);
