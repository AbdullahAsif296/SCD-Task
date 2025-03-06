const express = require("express");
const mongoose = require("mongoose");
const carRoutes = require("./routes/carRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/car-service")
  .then(() => console.log("Car Service DB Connected"))
  .catch((err) => console.log(err));

app.use("/", carRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Car Service running on port http://localhost:${PORT}`);
});
