
// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res){
    res.render('pages/home', {})
});

// TEST page
app.get('/testpage', function(req, res){
    res.render('pages/testpage', {})
});
// TEST page
app.get('/teamviewer', function(req, res){
    res.render('pages/teamviewer', {})
});

// resume page
app.get('/resume', function(req, res){
    res.render('pages/resume', {})
});

// htmlprojects page
app.get('/htmlprojects', function(req, res){
    res.render('pages/htmlprojects', {})
});

// projects page
app.get('/projects', function(req, res){
    res.render('pages/projects', {})
});

// Common Ports
app.get('/common-ports', function(req, res){
    res.render('pages/common-ports', {})
});

// A, B, C Subnet Reference Table
app.get('/subnet-classes', function(req, res){
    res.render('pages/subnetclasses', {})
});

// Display Types
app.get('/display-types', function(req, res){
    res.render('pages/display-types', {})
});

// IEEE Standards
app.get('/ieee-standards', function(req, res){
    res.render('pages/ieee-standards', {})
});

// 3D Models
app.get('/models', function(req, res){
    res.render('pages/models', {})
});

// achievements page
app.get('/achievements', function(req, res){
    res.render('pages/achievements', {})
});

// contact page
app.get('/contact', function(req, res){
    res.render('pages/contact', {})
});

// bedframe
app.get('/bedframe', function(req, res){
    res.render('pages/bedframe', {})
});

// Constant Idle Power to Monthly Consumption page
app.get('/monthly-power-consumption', function(req, res){
    res.render('pages/monthly-power-consumption', {})
});

// Labs
app.get('/projects/lab1', function(req, res){
    res.render('pages/lab1', {})
});
app.get('/projects/lab2', function(req, res){
    res.render('pages/lab2', {})
});
app.get('/projects/lab3', function(req, res){
    res.render('pages/lab3', {})
});
app.get('/projects/lab4', function(req, res){
    res.render('pages/lab4', {})
});
app.get('/projects/lab5', function(req, res){
    res.render('pages/lab5', {})
});
app.get('/projects/lab6', function(req, res){
    res.render('pages/lab6', {})
});
app.get('/projects/lab7', function(req, res){
    res.render('pages/lab7', {})
});
app.get('/projects/lab8', function(req, res){
    res.render('pages/lab8', {})
});
app.get('/projects/lab9', function(req, res){
    res.render('pages/lab9', {})
});

app.get('/cis3355', function(req, res){
    res.render('pages/cis3355', {})
});
app.get('/mapbox', function(req, res){
    res.render('partials/mapbox', {})
});
app.get('/smartswitch', function(req, res){
    res.render('pages/smartswitch', {})
});
app.get('/phptest', function(req, res){
    res.render('pages/phptest', {})
});
app.get('/uploads', function(req, res){
    res.render('pages/uploads', {})
});
app.get('/gallery', function(req, res){
    res.render('pages/gallery', {})
});
app.get('/link-preview-test3', function(req, res){
    res.render('pages/link-preview-test', {})
});
app.get('/404', function(req, res){
    res.render('pages/error', {})
});
app.all('*', (req, res) => {
    res.render('pages/redirect_to_404', {})
});
//internal use: port 8080
//External use on server, leave port empty
app.listen(8080);
