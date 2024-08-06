import express from "express";
const router = express.Router();

router.post("/send-email", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  console.log("Email data:", { firstName, lastName, email, message });

  // Simulate successful email sending
  res.status(200).json({ message: "Email sent successfully!" });
});

export default router;
