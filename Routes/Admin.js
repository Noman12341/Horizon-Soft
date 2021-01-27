const express = require('express');
const router = express.Router();
const Service = require('../Modals/Service');
const User = require('../Modals/User');
const Review = require('../Modals/Review');
const Member = require('../Modals/Member');
const upload = require('../Funtions/MulterInit');
// below are the get sections

// router for fetch the services
router.get("/get-services", async (req, res) => {
    await Service.find({}, (err, services) => {
        if (err) return res.status(400).json({ error: "Unable to get data." });

        return res.status(200).json({ services });
    });
});

// route for fetch Members 
router.get("/get-members", async (req, res) => {
    await Member.find({}, (err, members) => {
        if (err) return res.status(400).json({ error: "Unable to get data." });

        return res.status(200).json({ members });
    });
});
// router for fetch User
router.get("/get-users", async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) return res.status(400).json({ error: "Unable to get data." });

        return res.status(200).json({ users });
    });
});
// router for fetch Reviews
router.get("/get-reviews", async (req, res) => {
    await Review.find({}, (err, reviews) => {
        if (err) return res.status(400).json({ error: "Unable to get data." });

        return res.status(200).json({ reviews });
    });
});

// route for adding user in db
router.post("/add-user", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({
        name,
        email,
        password
    });
    await newUser.save(err => {
        if (err) return res.status(400).json({ error: "Unable to store the user in DB" });
        return res.sendStatus(200);
    });
});

// route for adding service in db
router.post("/add-service", upload.single('image'), async (req, rse) => {
    const { title, text } = req.body;
    const newService = new Service({
        title,
        text,
        img: req.file.fieldname
    });
    newService.save(err => {
        if (err) return res.status(400).json({ error: "Unable to save data in DB." });

        return res.sendStatus(200);
    });
});

// route for adding reviews in db
router.post("/add-review", upload.single('image'), async (req, res) => {
    const { name, job, review, rating } = req.body;
    const newReview = new Review({
        name,
        job,
        review,
        rating,
        img: req.file.filename
    });
    await newReview.save(err => {
        if (err) return res.status(400).json({ error: "Unable to save data in DB." });

        return res.sendStatus(200);
    });
});

// route to add members
router.post("/add-member", upload.single('image'), async (req, res) => {
    const { name, job, faceBookLink, gmailLink, linkedInLink, twitterLink } = req.body;
    const newMember = new Member({
        name,
        job,
        img: req.file.filename,
        faceBookLink,
        gmailLink,
        linkedInLink,
        twitterLink
    });
    await newMember.save(err => {
        if (err) return res.status(400).json({ error: "Unable to save the data." });

        return res.sendStatus(200);
    });
});
module.exports = router;