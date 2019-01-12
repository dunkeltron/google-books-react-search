//this file packages and exports all the routes we use in the site
const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./googleBooks");
const apiRoutes = require("./books");

//connect the other routes to this file
//routes to interact with google
router.use("/google", googleRoutes);
//rotues to interact with our database
router.use("/books", apiRoutes)

// render the html page if the route is not previously defined
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;