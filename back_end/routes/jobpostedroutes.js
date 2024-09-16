// const express = require('express');
// const router = express.Router();
// const Job = require('../models/jobposted'); // Adjust path as necessary

// // Handle POST request to create a new job posting
// router.post('/jobPost', async (req, res) => {
//     try {
//         const newJob = new Job(req.body);
//         await newJob.save();
//         res.status(201).json({ message: 'Job posting created successfully!' });
//     } catch (error) {
//         console.error('Error creating job posting:', error);
//         res.status(500).json({ error: 'Failed to create job posting.' });
//     }
// });
// module.exports = router;
