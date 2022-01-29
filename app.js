const express = require ('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public')); 



app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");

app.get('/', (req, res) => {
    const data = {
        userName: "Classroom"
    }
    res.render("home", data);

});

app.get('/about', (req, res) => {

    res.render("about");

});

app.get('/Works', (req, res) => {

    res.render("Works");
  
});

app.get('/PhotoGallery', (req, res) => {

    res.render("PhotoGallery");
  
});

app.listen(3000, () => console.log("listening on 3000..."));


