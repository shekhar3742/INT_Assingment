require("dotenv").config();
const express = require("express");
const classifyRoutes = require("./routes/classifyRoutes");

const app = express();
app.use(express.json());

app.use("/api", classifyRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
