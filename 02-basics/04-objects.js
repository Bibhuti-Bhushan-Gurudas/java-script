const tinderUser = new Object();  // singleTon object

const tinderUser1 = {} // non singleTonObject

tinderUser1.id = "123";
tinderUser1.name= "Ranu",
tinderUser1.isLoggedIn = false;

// console.log(tinderUser);
// console.log(tinderUser1);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFulName:{
            firstName:"Bibhuti",
            lastName:"Gurudas"
        }
    }
}