const express = require('express');

const router = express.Router();
const Job = require('../models/job');
const config = require('../config/database');

//save job
router.post('/job', (req, res, next) => {
    let newJob = new Job({
        title: req.body.title,
        description: req.body.description,
        application_link: req.body.application_link,
        deadline: req.body.deadline,
        employer_id: req.body.employer_id,
        employer_name: req.body.employer_name,
        employer_email: req.body.employer_email,
        employer_contact: req.body.employer_contact
    });

    Job.addJob(newJob, (err, job) => {
        if(err){
            res.json({ success: false, msg: "Failed to post the job."});
        } else {
            res.json({ success: true, msg: "Your job has been successfully posted."});
        }
    });
});

//get all jobs
router.get('/jobs', (req, res, next) => {
    Job.getJobs((err, jobs) => {
        if(err){
            res.send(err);
        } else {
            res.json(jobs);
        }
    });
});

//get a single job from job id
router.get('/job/:id', (req, res, next) => {
    Job.getJobById(req.params.id, (err, job) => {
        if(err){
            res.send(err);
        } else {
            res.json(job);
        }
    });
});

//delete job from Id
router.delete('/job/:id', (req, res, next) => {
    Job.deleteJob(req.params.id, (err, job) => {
        if(err) throw err;
        if(job) {
            res.json({success: true, msg: 'Job successfully deleted.'});
        }
    });
});

//get list of jobs from employer_id
router.get('/jobs/:employer_id', (req, res, next) => {
    Job.getJobByEmployerId(req.params.employer_id, (err, jobs) => {
        if(err){
            res.send(err);
        } else {
            res.json(jobs);
        }
    })
});

module.exports = router;