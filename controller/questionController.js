//Algorithm to find the set of questions
const questions = require("./algo.js");

class Controller {
  static getQuestionData(req, res) {
    try {
      //extracting body from the request
      const data = req.body;

      //extracting total marks from req.body
      const totalMarks = data.totalMarks;

      //extracting percentage of easy marks from req.body
      const easyPercentage = (data.Difficulty.easy * totalMarks) / 100;

      //extracting percentage of medium marks from req.body
      const mediumPercentage = (data.Difficulty.medium * totalMarks) / 100;

      //extracting percentage of hard marks from req.body
      const hardPercentage = (data.Difficulty.hard * totalMarks) / 100;

      //checking if the marks distribution are correct or not
      if (
        parseInt(totalMarks) !=
        easyPercentage + mediumPercentage + hardPercentage
      ) {
        res.status(500).json({
          error:
            "Percentage of marks out of total marks cannot be distributed...",
        });
        return;
      }

      //get array of questions according to marks distribution.
      const questionArray = questions(
        easyPercentage,
        mediumPercentage,
        hardPercentage
      );

      //send the array of questions to client server.
      res.json({ questions: questionArray });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = Controller;
