const mongoose = require("mongoose");
main().then(()=>{
    console.log("Connection Successful")
}).catch(err=>{
    console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}


const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : 10,
    },
    discount : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        enum : ["Fiction","Non-Fiction"]
    },
    genre : [String]
})

//TO form collections in database 
const Book = mongoose.model("Book",bookSchema);

// creating document1
let book2 = new Book({
    title : "Mahabharat",
    author : "Rishi Valmiki",
    category : "Fiction",
    genre : ["Ramayana","SiyaRam","Hare Krishna"],
    price : 2
});

book2.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
}); 


//update

Book.findByIdAndUpdate("651e2d4a6c4ebb7e4f557a9a",{price : 2},{runValidators : true}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})