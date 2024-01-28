const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
// const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const goalRouter = require("./routes/goalRouter");
const userRouter = require("./routes/userRoutes");
const tokenRouter = require("./routes/tokenRouter");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/user", userRouter);
app.use("/api/token", tokenRouter);

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
