const enquiry = require('./enquiryController.js');

let addEnquiry = (req,res)=>{
    let enquiryData = enquiry.addEnquiry(req);  
    console.log(enquiryData);
    res.json(enquiryData);
}

module.exports={
    addEnquiry
}


async function getCourese() {
    const couresr = await couresr
    .find({ author : 'Mosh', isPublic: true})
    .find({ author : {$gt: 10}})
    .limit(10)
    .sort({ name : 1})
    .select({ name :1, tage: 1});
}

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to )
// lt (less than)
// lte (less than or equal  to)
// in 
// nin (not in)
// /^/  starts with first name 
// /$/ end with letter
//  /.*.*/  contains 


await course.validate();