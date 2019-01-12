//this file packages and exports all the routes we use in the site
const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./googleBooks");
const apiRoutes = require("./books");

//connect the other routes to this file
//routes to interact with google
router.use("/api/google", googleRoutes);
//rotues to interact with our database
router.use("/api/user", apiRoutes)

// render the html page if the route is not previously defined
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;