const express = require("express");
require("dotenv").config();
const cors = require("cors");
const foodRouter = require("./Routes/Foods");
const path = require("path");
const app = express();
const _dirname = path.resolve();

const corseOptions = {
  origin: "https://for-vercel-backend.onrender.com/",
  credentials: true,
};
app.use(cors(corseOptions)); // Enable CORS for all routes

// body parser
app.use(express.json()); // middleware to pass JSON
app.use("/foods", foodRouter.routes);
app.use(express.static('dist'))
app.use(express.static(path.join(_dirname, "/FRONTEND/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "FRONTEND/dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
