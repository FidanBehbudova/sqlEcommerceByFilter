const express = require("express");
const path = require("path");
const userRouter = require("./routers/user.js");


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/nmodule", express.static(path.join(__dirname, "node_modules")));
app.use("/public", express.static(path.join(__dirname, "public")));




app.use(userRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
