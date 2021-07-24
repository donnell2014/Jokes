const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("I have got the heo bruh"))
    .catch(() => console.log("I lost that hoe bruh", err))