require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Modals/User');

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // check if user Exists
    await User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({ msg: "User does not exists." });

        // Validate user password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." });

            jwt.sign({ id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) return res.status(400).json({ msg: "Error in creating token." })

                    return res.status(200).json({ token, user: { userID: user._id, name: user.name, email: user.email } });
                });
        });
    });
});

// User Registration Route 
router.get("/registration", async (req, res) => {
    const { name, email, password, password2 } = req.body;

    // Simple Validation
    if (password !== password2) {
        return res.status(400).json({ msg: ["Both Password fields does not match"] });
    }


    // Check if user Already Exist
    await User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({ msg: ["User already exists"] });

        // If user not exist then register here
        const newUser = new User({
            name,
            email,
            password
        });

        // Hast and Salt password Process
        bcrypt.genSalt(10, (err, Salt) => {
            if (err) throw err;
            bcrypt.hash(newUser.password, Salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;
                newUser.save().then(user => {

                    // sigining JWT token here
                    jwt.sign({ id: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;

                            return res.status(200).json({
                                token,
                                user: {
                                    userID: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        });
                });
            });
        });

    });
});

module.exports = router;