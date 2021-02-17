const express = require('express');
const router = express.Router();
const Member = require('../Modals/Member');
const Review = require('../Modals/Review');
const nodemailer = require('nodemailer');

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

// send email from contact us page
router.post("/send-email", async (req, res) => {
    const { name, email, phoneNo, country, description } = req.body;
    // now ready to send getEmails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mytestingemail12341@gmail.com',
            pass: 'hkzrrzlublcbhclj'
        }
    });
    var mailOptions = {
        from: 'mytestingemail12341@gmail.com',
        to: 'mfaisal902@gmail.com',
        subject: "This email sent from Horizon Soft website.",
        text: "name: " + name + "\nemail: " + email + "\nPhoneNo: " + phoneNo + "\nCountry: " + country + "\nMessage: " + description
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.sendStatus(400);
        } else {
            return res.sendStatus(200);
        }
    });
});

module.exports = router;