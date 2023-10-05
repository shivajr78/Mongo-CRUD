const mongoose = require('mongoose');

//To connect index.js with database
main()
    .then(() => {
        console.log("Connection successful");
    }).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


//Create user schema or table
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

//Create model

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({ name: "Shiva", age: 21, email: "shivajr78@gmail.com" });
// const user2 = new User({ name: "Sushma", age: 24, email: "sushma1206@gmail.com" });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err)
// })

// User.insertMany([
//     {name:"A", age:21,email:"a@google.com"},
//     {name:"B", age:22,email:"b@google.com"},
//     {name:"C", age:23,email:"c@google.com"}
// ]).then((res)=>{
//     console.log(res)
// });


// User.findOne({name:{$eq : "Shiva"}}).then(res =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({}).then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// });

// User.findByIdAndUpdate("651c272820a318c2a6fac922",{age: 44},{new:true}).then(res => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err)
//     });


User.findOneAndDelete({name :"Shiva"}).then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});