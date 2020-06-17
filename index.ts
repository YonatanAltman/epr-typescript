
interface IUserBus {
    money: number;
    ravKav?: any;
}
class BaseObj {
    id: number;
    name: string;
    constructor(id: number, name: string, title?: string) {
        this.id = id;
        if (name.length > 2) {

            this.name = name;
        }
    }
}

class Address {
    city: string;
    street: string;
    house: string;
}
class User extends BaseObj implements IUserBus {

    age: number;
    address: Address;
    money: number;
    private _email: string;


    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        if (value.includes('@')) {

            this._email = value;
        }


    }
    public get fullName() {
        return this.name + ' ' + this.age;
    }
    constructor(id: number, name: string, age: number) {
        super(id, name);

        this.age = age;
    }


    isAllowedDrinking(): boolean {
        return this.age >= 18;
    }

}
class Car extends BaseObj {

    engin: any;
}
class Robot implements IUserBus {
    money: number;

}

let user = new User('yonatan', 29);
let robocop = new Robot();
robocop.money = 8;
let user2: User = new User('harel', 34);
const car = new Car()

user.money = 5.90;

car.name = 'Focus';
user.email = 'dlifja;lfj;ldsajflidsajf;idsajf;a';
user.email = 'jdfdjfjfff';
user.email = 'tina@dndn';
user.email = 'dlifja;lfj;ldsajflidsajf;idsajf;a';
console.log(user.fullName);
console.log(user.isAllowedDrinking());
console.log(user.email);

console.log(user2.fullName);
console.log(user2.isAllowedDrinking());
console.log(car);

const bus: IUserBus[] = [];

bus.push(user);
bus.push(robocop);

bus.forEach(element => {
    console.log(

        element.money + '$'
    );
});

console.log(bus);
