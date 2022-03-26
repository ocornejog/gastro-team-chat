const express = require("express");
//import firebase from "../database/firebase";
//const mongoose = require("mongoose");
//const config = require("config");
//const morgan = require("morgan");
//const dotenv = require("dotenv");
const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);

// Initialize our socket
const io = socketio(server).sockets;

// BorderParser Middleware
app.use(express.json());

// Load Env
dotenv.config({ path: "./config.env" });

// Connect DB
/*
const db = config.get("mongoURI");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongodb is connected..."))
  .catch((err) => console.log(err));
*/
// Log route actions
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Use Routes
//* Auth Routes *//
app.use("/api/users", require("./routes/users"));
app.use("/api/login", require("./routes/login"));
app.use("/api/login", require("./routes/login"));

//* Middleware *//
require("./middleware/socket")(io);

//const port = process.env.PORT || 5000;

//server.listen(port, () => console.log(`Server started on port ${port}`));