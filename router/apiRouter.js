const Controller = require("../controller/questionController");

const router = require("express").Router();

router.get("/questions", Controller.getQuestionData);

module.exports = router;
