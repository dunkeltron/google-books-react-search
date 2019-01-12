const db = require("../../models");
const router = require("express").Router();

    router.get("/books", function (req, res) {
        db.Books.find({})
            .then(function (books) {
                res.json(books);
            })
            .catch(function (err){
                res.status(422).json(err);
            })
    });

    router.post("/books", function (req, res) {
        db.Books.create(req.body)
            .then(function (dbBooks) {
                res.json(dbBooks);
            })
            .catch(function (err) {
                res.status(422).json(err);
            })
    });

    router.delete("/books/:id", function (req, res) {
        db.Books.findByIdAndRemove(req.params.id)
        .then(dbBook => {
            console.log("Book Removed");
            res.json(dbBook);
        }) 
        .catch( err => res.status(422).json(err))
    });
    
module.exports = router;