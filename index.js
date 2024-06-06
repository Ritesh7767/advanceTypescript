"use strict";
const sumOfAge = (user1, user2) => {
    return user1.age + user2.age;
};
const result = sumOfAge({ name: 'ritesh', age: 21 }, { name: "rinky", age: 20 });
console.log(result);
