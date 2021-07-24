const Joke = require("../models/jokes.model");

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Create method is wrong asf", error: err}))
}


module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Find all method is wrong asf", error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Find one method is wrong asf", error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "Update method is wrong asf", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json(deleteJoke))
        .catch(err => res.json({message: "Delete method is wrong asf", error: err}))
}
