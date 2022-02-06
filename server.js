// dependancies

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// PORT

const PORT = process.env.PORT || 3000 ;

// defining app as express
const app = express();

// morgan logger
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// connecting with MongoDB via mongoose at our myapp database running locally on default port 27017
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
});


// routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// App Listen
app.listen(PORT, () => {

    console.log(`Application is running on http://localhost:${PORT}`);

});