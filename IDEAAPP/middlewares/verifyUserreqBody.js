const userModel = require("../models/user.model");

const verifyuserReqBody = async (req, res, next) => {
    try {

        if (!req.body.name) {
            return res.status(400).send({
                message: "Failed ! user Name is not provided"
            });
        }

        if (!req.body.userId) {
            return res.status(400).send({
                message: "Failed ! user Id is not provided"
            });
        }

        const userById = await userModel.findOne({
            userId: req.body.userId
        });

        if (userById != null) {
            return res.status(400).send({
                message: "Failed ! user Id is duplicate"
            });
        }

        if (!req.body.email) {
            return res.status(400).send({
                message: "Failed ! Email Id is not provided"
            });
        }

        const userByEmail = await userModel.findOne({
            email: req.body.email
        });

        if (userByEmail != null) {
            return res.status(400).send({
                message: "Failed ! Email Id is duplicate"
            });
        }

        next();

    } catch (err) {
        res.status(500).send({
            message: "Error while validating request",
            error: err.message
        });
    }
};

module.exports = {
    verifyuserReqBody
};