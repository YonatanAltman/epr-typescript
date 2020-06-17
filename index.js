var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseObj = /** @class */ (function () {
    function BaseObj() {
    }
    return BaseObj;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.includes('@')) {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.name + ' ' + this.age;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isAllowedDrinking = function () {
        return this.age >= 18;
    };
    return User;
}(BaseObj));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(BaseObj));
var Robot = /** @class */ (function () {
    function Robot() {
    }
    return Robot;
}());
var user = new User('yonatan', 29);
var robocop = new Robot();
robocop.money = 8;
var user2 = new User('harel', 34);
var car = new Car();
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
var bus = [];
bus.push(user);
bus.push(robocop);
bus.forEach(function (element) {
    console.log(element.money + '$');
});
console.log(bus);
