const express = require('express');
const router = express.Router();
const Member = require('../Modals/Member');

router.get("/get-members", async (req, res) => {
    await Member.find({}, (err, members) => {
        if (err) return res.sendStatus(400);

        return res.status(200).json({ members });
    });
});

module.exports = router;