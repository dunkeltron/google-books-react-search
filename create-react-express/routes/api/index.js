const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./googleBooks");
const apiRoutes = require("./books");

//connect the other routes to this file
router.use("/api/google", googleRoutes);
router.use("/api/user", apiRoutes)

// Send every other request to the React app
// Define any API routes before this runs
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;