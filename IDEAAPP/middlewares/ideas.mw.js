// POST validation
exports.validate_POST_req_body = (req, res, next) => {

    const req_body = req.body;

    if (!req_body.id) {
        return res.status(400).send({ message: "id is required" });
    }

    if (!req_body.idea_name) {
        return res.status(400).send({ message: "idea_name is required" });
    }

    if (!req_body.author_name) {
        return res.status(400).send({ message: "author_name is required" });
    }

    if (!req_body.idea_description) {
        return res.status(400).send({ message: "idea_description is required" });
    }

    next();
};


// PUT validation
exports.validate_PUT_req_body = (req, res, next) => {

    const req_body = req.body;

    if (!req_body.id) {
        return res.status(400).send({ message: "id is required" });
    }

    if (req_body.id != req.params.id) {
        return res.status(400).send({
            message: `Body id ${req_body.id} does not match param id ${req.params.id}`
        });
    }

    if (!req_body.idea_name) {
        return res.status(400).send({ message: "idea_name is required" });
    }

    if (!req_body.author_name) {
        return res.status(400).send({ message: "author_name is required" });
    }

    if (!req_body.idea_description) {
        return res.status(400).send({ message: "idea_description is required" });
    }

    next();
};