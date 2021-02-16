const express = require('express');
const router = express.Router();
const Member = require('../Modals/Member');
const Review = require('../Modals/Review');

router.get("/get-members", async (req, res) => {
    await Member.find({}, (err, members) => {
        if (err) return res.sendStatus(400);

        return res.status(200).json({ members });
    });
});

// get all the reviews
router.get("/get-reviews", async (req, res) => {
    await Review.find({}, (err, reviews) => {
        if (err) return res.sendStatus(400);

        return res.status(200).json({ reviews });
    });
});

module.exports = router;