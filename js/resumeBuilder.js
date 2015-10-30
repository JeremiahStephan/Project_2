//$("#main").append("Jeremiah Stephan");

//var awesomeThoughts = "I am Jeremiah and I am AWESOME!";
//console.log(awesomeThoughts);

//var email = "name@gmail.com";
//var newEmail = email.replace("gmail", "yahoo");

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

//$("#main").append(funThoughts);

//append() end of HTML
//prepend beginning of HTML

//var name1 = "Jeremiah Stephan";
//var role1 = "Front-End Web Developer";



var bio = {
	"name": "Jeremiah Stephan",
	"role": "Front-End Web Developer",
	"contacts": { 
		"mobile": "312.714.4748",
		"email": "jeremiah.stephan@gmail.com",
		"github": "jeremiahstephan",
	},
	"welcomeMessage": "Place a welcome message here.",
	"skills": ["skill1", "skill2", "skill3"],
	"bioPic": "images/fry.jpg"
}

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var work = {
	"jobs": [
		{
			"employer": "something",
			"title": "title here",
			"dates": "dates here",
			"description": "description here something something something"
		},
		{
			"employer": "something",
			"title": "title here",
			"dates": "dates here",
			"description": "description here something something something"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "John Marshall Law School",
			"city": "Chicago",
			"major": "Law",
			"minor": "None",
			"graduation": 2013,
			"courses": ["JavaScript", "CSS"]
		},
		{
			"name": "UIC",
			"city": "Chicago",
			"major": "Poli Sci",
			"minor": "Philosophy",
			"graduation": 2003,
			"courses": ["JavaScript", "CSS"]
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"name": "Project1",
			"date": "10/2015",
			"description": "description here",
			"link": "http://www.url.com"
		},
		{
			"name": "Project2",
			"date": "11/2015",
			"description": "description here",
			"link": "http://www.url.com"
		}
	]
}

/*
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(bio.name);

$("#main").append(work["position"]); //example bracket notation
$("#main").append(education.name); //example dot notation
*/













