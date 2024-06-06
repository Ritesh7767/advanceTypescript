// interface User {
//     name : string,
//     age : number
// }

// const sumOfAge = (user1 : User, user2 : User) => {
//     return user1.age + user2.age
// }

// const result = sumOfAge({name : 'ritesh', age : 21}, {name : "rinky", age : 20})
// console.log(result)

// interface User {
//     _id : string,
//     username : string,
//     email : string,
//     password : string,
//     age : number
// }

// const getUser : User = async () => await User.findById(32)

// type Update = Pick <User, 'username' | 'email' | 'password'>
// type UpdatePropsOptional = Partial<Update>

// const updateUser = async (user : UpdatePropsOptional) => {}

// const userinfo = {
//     username : "ritesh",
//     age : 21
// }

// interface User {
//     username : string,
//     age : number
// }

// const user: Readonly <User>= {
//     username : 'ritesh',
//     age : 21
// }

// user.age = 23

// type UserId = {
//     id : string,
//     username : string
// }

// interface Userid {
//     id : string,
//     username : string
// }

// interface User {
//     [key : string] : Userid
// }

// const user : User = {
//     "ritesh" : {
//         id : '123',
//         username : "ritesh7767"
//     },
//     "rinky" : {
//         id : "21",
//         username : "rinky76"
//     }
// }

// type User = Record <string, {id : string, age : nu

import zod from 'zod'

const userValidation = zod.object({
    _id : zod.number(),
    username : zod.string(),
    email : zod.string().email({message : "not a valid email"}),
    password : zod.string().min(8,{message : "password must be of 8 characters"}) 
})

export type finalUserValidation = zod.infer<typeof userValidation>











