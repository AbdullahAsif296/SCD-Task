const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/user-service")
  .then(() => console.log("User Service DB Connected"))
  .catch((err) => console.log(err));

app.use("/", userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`User Service running on port http://localhost:${PORT}`);
});
