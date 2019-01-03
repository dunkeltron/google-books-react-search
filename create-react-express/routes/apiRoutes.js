var db = require("../models");

module.exports = function (app) {
    app.get("/api/books", function (req, res) {
        db.Book.find({})
            .then(function (data) {
                res.json(data);
            })
    });

    app.post("/api/books", function (req, res) {
        db.Book.create({
                title: req.body.title,
                authors: req.body.authors,
                description: req.body.description,
                image: req.body.image,
                link: req.body.link
            }).then(function (data) {
                res.send(200);
            })
            .catch(function (err) {
                res.json(err);
            })
    });

    app.delete("/api/books/:id", function (req, res) {
        db.Book.findByIdAndRemove(req.params.id,(err,todo)=> {
            if(err) res.status(500).send(err);
            const response ={
                message: "Todo successfully deleted",
                id: todo._id
            };
            return res.status(200).send(response);
        });
    });

    app.get("*", function (req, res) {

    });
}