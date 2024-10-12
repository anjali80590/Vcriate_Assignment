const Quiz = require("../models/quizModel");

// Create a new quiz
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({
      title: req.body.title,
      questions: req.body.questions,
      createdBy: req.user.id,
    });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get quiz details
exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz and view results
exports.submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    let score = 0;
    req.body.answers.forEach((answer, index) => {
      if (quiz.questions[index].options[answer].isCorrect) {
        score++;
      }
    });
    res.json({ score });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
