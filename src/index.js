const express = require("express"); // Import Express
const cors = require("cors"); // Handle Cors Related Issue
const bodyParser = require("body-parser"); // Parser: Send JSOn Data

const app = express();

const authRouter = require("./routers/auth/authRouter");
const userRouter = require("./routers/user/userRouter");

app.use(cors());
app.use(express.json());

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server Started On ", port));
