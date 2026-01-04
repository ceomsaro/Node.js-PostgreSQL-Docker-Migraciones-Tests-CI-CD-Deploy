require("dotenv").config();
const express = require("express");

const health = require("./routes/health");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

app.use("/health", health);
app.use("/tasks", tasks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on ${PORT}`));
