import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import emailRoutes from "../routes/email.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
