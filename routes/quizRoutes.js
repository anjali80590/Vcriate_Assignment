const express = require("express");
const {
  createQuiz,
  getQuizzes,
  getQuiz,
  submitQuiz,
} = require("../controllers/quizController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createQuiz);
router.get("/", getQuizzes);
router.get("/:id", getQuiz);
router.post("/:id/submit", protect, submitQuiz);

module.exports = router;
