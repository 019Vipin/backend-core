const { JsonWebTokenError } = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const config=require("../configs/auth.config");




exports.signup = async (req, res) => {
    console.log(req.body);

    const userObj = {
        name: req.body.name,
        userId: req.body.userId,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    try {

        const userCreated = await userModel.create(userObj);

        const postResponse = {
            name: userCreated.name,
            userId: userCreated.userId,
            email: userCreated.email,
            createdAt: userCreated.createdAt,
            updatedAt: userCreated.updatedAt,
            message: "Registration Successful!"
        };

        res.status(201).send(postResponse);

    } catch (err) {

        console.log("Error while saving user:", err.message);

        res.status(500).send({
            message: "Some internal error while inserting the user"
        });
    }
};


/** 
 * logic for the sign in
 */

exports.signin = async (req, res) => {

    // Check if the user exists
    const user = await userModel.findOne({
        userId: req.body.userId
    });

    console.log(user);

    if (user == null) {
        return res.status(400).send({
            message: "Failed! User ID doesn't exist..."
        });
    }

    // Check password
    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if (!passwordIsValid) {
        return res.status(400).send({
            message: "Failed! Password is not matching..."
        });
    }

    // Generate JWT
    const token = jwt.sign(
        { id: user.userId },
        config.secret,
        {
            expiresIn: 60
        }
    );

    res.status(200).send({
        name: user.name,
        userId: user.userId,
        email: user.email,
        accessToken: token
    });
};