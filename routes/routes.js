const create_profile = require("../controllers/createProfile");

router = require("express").Router();

router.route("/create").post(create_profile);

module.exports= router;