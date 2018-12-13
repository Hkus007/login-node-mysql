const user = require("./userController.js");
const _ = require('lodash');

let addUser = (req,res)=>{
    let user =  user.addUser(req);
    res.json(user);
};

let getUser = (req,res)=>{
    let user  = user.getUser(req);
    res.json(user);
}

module.exports = {
    addUser,
    getUser
} 


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playCustomer')
.then(() => console.log('mongoDb connect'))
.catch(err => console.error('Could not connect to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags:[String],
    date:{type: Date, default: Date.now},
    isPublished : Boolean
});



const Course = mongoose.model('Courese', courseSchema);
async function createCourse() {
    const course = new Course({
        name: 'Node.Js Coures',
        author: 'Hemant',
        tags: ['node', 'backend'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result); 
}

async function getCourses(){
    const courses = await Course
    .find({ author: 'Hemant', })
    // or and 
    .find()
    .or([{ author:'morh'}, ])
    .find({price:{ $gt: 10, $lte: 20}})
    .find({price: { $in: [10, 15, 20]}})
    .limit(10)
    .sort({ name: 1})
    .select({ name : 1, tags: 1})
    // start with Mosh
    .find({author:/^mosh/})
    // end with mosh
    .find({ author: /mosh$/})
    // conation mosh 
    .find({ author: /.*.*/})
    .count();
}



  