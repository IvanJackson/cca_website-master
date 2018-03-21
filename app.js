var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

//App configuration
// mongoose.connect("mongodb://localhost/cca_website");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//HOME ROUTES

app.get('/', function(req, res){
    res.render("index");
    console.log("LAUNCH PAGE*");
});

// TOWER ROUTES
    app.get('/towers', function(req, res){
   res.send("<h1>Welcome to the CCA Towers Page!</h1>" + "<a href='/'>HOME</a><br>" + "<a href='/services'>SERVICES</a>");
   console.log("TOWERS PAGE*");
 });

// OPERATIONS TOWER ROUTES
app.get('/operations', function(req, res){
    res.render("Operations");
    console.log("OPERATIONS TOWERS PAGE*");
});

// DIGITAL SOLUTIONS TOWER ROUTES
app.get('/digitalsolutions', function(req, res){
    res.render("DigitalSolutions");
    console.log("DIGITAL SOLUTIONS TOWERS PAGE*");
});
// DIGITAL SOLUTIONS TOWER ROUTES
app.get('/recruitment&development', function(req, res){
    res.render("Recruitment&Development");
    console.log("RECRUITMENT & DEVELOPMENT TOWERS PAGE*");
});
// DIGITAL SOLUTIONS TOWER ROUTES
app.get('/consultingservices', function(req, res){
    res.render("ConsultingServices");
    console.log("ConsultingServices TOWERS PAGE*");
});


// SERVICES ROUTES
app.get('/services', function(req, res){
    res.render("Services");
    console.log("SERVICES PAGE*");
});

// CALENDAR ROUTES

app.get('/calendar', function(req, res){
    res.send("<h1>Welcome to the CCA Calendar Page!</h1>" + "<a href='/'>HOME</a><br>" + "<a href='/services'>SERVICES</a>");
    console.log("CALENDAR PAGE*");
});

// CONTACT ROUTES

app.get('/contact-us', function(req, res){
    res.render("contactus");
    console.log("CONTACT US PAGE*");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("The CCA Server has started!");
});