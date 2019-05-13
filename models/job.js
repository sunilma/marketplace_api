const mongoose = require('mongoose');

//job schema
const JobSchema = mongoose.Schema({
    title: String,
    description: String,
    application_link: String,
    deadline: Date,
    employer_id: String,
    employer_name: String,
    employer_email: String,
    employer_contact: String,
    posted_date: { type: Date, default: Date.now }
});

//mongoose model
const Job = module.exports = mongoose.model('Job', JobSchema);

//get all jobs data
module.exports.getJobs = function(callback){
    Job.find({}, callback);
}

//get single job from id
module.exports.getJobById = function(id, callback){
    const query = { _id: id };
    Job.findOne(query, callback);
}

//add new job to database
module.exports.addJob = function(newJob, callback){
    newJob.save(callback);
}

//delete job from database using id
module.exports.deleteJob = function(id, callback){
    const query = { _id: id };
    Job.remove(query, callback);
}

//get list of jobs from employers id
module.exports.getJobByEmployerId = function(id, callback){
    const query = { employer_id: id };
    Job.find(query, callback);
}