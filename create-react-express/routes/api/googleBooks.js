const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req,res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=hooked",{params: req.q})
    .then( results => {
        //console.log(results.data.items);
        const  books = results.data.items;
        res.json(books);
    })
    .catch( err => console.log(err))
})
module.exports = router;
