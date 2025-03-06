const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/booking-service")
  .then(() => console.log("Booking Service DB Connected"))
  .catch((err) => console.log(err));

app.use("/", bookingRoutes);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Booking Service running on port http://localhost:${PORT}`);
});
