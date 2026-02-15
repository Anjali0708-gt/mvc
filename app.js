const express = require("express");
const bodyParser = require("body-parser");
const productrouter = require("./route/productroute");

const app = express(); // Create express app
app.use(express.static("public")); 
//  Setup View Engine (Pug)
app.set("view engine", "pug"); // Use Pug for rendering
app.set("views", "./views"); // Folder where pug files are stored

//  Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// This allows us to read form data (req.body)

//  Register routes
// Any request starting with /users goes to userRoutes.js
app.use("/", productrouter);
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

//  Start the server
app.listen(3000, () => console.log(" Server running on http://localhost:3000"));