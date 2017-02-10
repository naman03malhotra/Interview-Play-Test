var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Users = require('./models/users');
var Interviewers = require('./models/interviewers');

//connecting


mongoose.connect('mongodb://localhost/interview-app');
var db = mongoose.connection;



app.get('/', function(req, res){
	res.send('Hellowwwt!');
});

app.get('/api/users', function(req, res){
	Users.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.get('/api/users/:_id', function(req, res){
	Users.getUsersById(req.params._id,function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/interviewers', function(req, res){
	Interviewers.getInterviewers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});



app.listen(3000);
console.log('Running....');

