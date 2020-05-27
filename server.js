const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers");

const PORT = process.env.PORT || 8080;

const app = express();

//MIDDLEWARE

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });