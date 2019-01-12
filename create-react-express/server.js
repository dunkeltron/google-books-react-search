const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");


//set the URI for the mongo database to store our articles
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

//connect mongoose to the server
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//let express use our predefined routes for API and view
app.use(routes)

//start our API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
