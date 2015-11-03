/***************************
BIO SECTION
***************************/

var bio = {
	"name": "Jeremiah Stephan",
	"role": "Front-End Web Developer",
	"contacts": { 
		"mobile": "800.888.1234",
		"email": "jeremiah.stephan@mail.com",
		"github": "jeremiahstephan",
		"twitter": "@JeremiahatWork",
	},
	"welcomeMessage": "Hello!  This is a place for a welcome message.",
	"skills": ["HTML", "CSS", "JavaScript", "Jquery", "AJAX", "Java"],
	"bioPic": "images/fry.jpg"
};

function displayMyBio() {
	
	//Role
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	//Name
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	
	 //Profile Picture
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);

   	//Welcome Message
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

	//Header & Footer Contacts
	var formattedCell = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedCell);
    $("#footerContacts").append(formattedCell);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    //Skills at a Glance
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	
};

displayMyBio();  //envoke the code!

/***************************
WORK EXPERIENCE SECTION
***************************/

var work = {
	"jobs": [
		{
			"employer": "Very Impressive Employer",
			"title": "Overly Descriptive Title",
			"location": "Chicago, IL",
			"dates": "10/2013 to present",
			"description": "At this VERY important job, I do many things that are highly relevant to the new job I desperately want.  Although I do all the things in this description, chances I only to a handfull of these impressive tasks on a weekly basis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			"employer": "Somewhat Impressive Employer",
			"title": "Middle Management Title",
			"location": "10/2011 to 10/2013",
			"dates": "dates here2",
			"description": "At this VERY important job, I do many things that are highly relevant to the new job I desperately want.  Although I do all the things in this description, chances I only to a handfull of these impressive tasks on a weekly basis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		},
		{
			"employer": "First Adult Job",
			"title": "Bottom of the Company Title",
			"location": "Chicago, IL",
			"dates": "8/2005 to 10/2011",
			"description": "At this VERY important job, I do many things that are highly relevant to the new job I desperately want.  Although I do all the things in this description, chances I only to a handfull of these impressive tasks on a weekly basis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
		}
	]
};

function displayMyWork() {
	for (job in work.jobs) {
	    $("#workExperience").append(HTMLworkStart);
	    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    $(".work-entry:last").append(formattedEmployerTitle);
	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	    $(".work-entry:last").append(formattedDates);
	    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
	    $('.work-entry:last').append(formattedDescription);
	}
};

displayMyWork(); 

/***************************
PROJECTS SECTION
***************************/

var projects = {
	"projects": [
		{
			"title": "First Unimpressive Project #1",
			"date": "10/2015",
			"description": "A small project using basic skills.",
			"image": "http://placehold.it/400x150"
		},
		{
			"title": "Interesting Project #2",
			"date": "11/2015",
			"description": "A larger project using intermediate skills.  This one is worth looking at, briefly.",
			"image": "http://placehold.it/300x150", 
		}
		,
		{
			"title": "Impressive Project #3",
			"date": "11/2015",
			"description": "A large project using concerningly advanced skills.  How did he do this?  Is this even possible using modern technology?",
			"image": "http://placehold.it/550x150"
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDate);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedImage);
		
		/*
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		*/
	}
};

projects.display();

/***************************
EDUCATION SECTION
***************************/

var education = {
	"schools": [
		{
			"name": "Impressive Graduate School",
			"city": "Chicago",
			"major": "Highly Relevant Graduate Degree",
			"minor": "None",
			"graduation": 2013,
			"courses": ["JavaScript", "CSS"]
		},
		{
			"name": "Less Impressive Small University",
			"city": "Chicago",
			"major": "Unrelated field with no job prospects",
			"minor": "Philosophy",
			"graduation": 2003,
			"courses": ["JavaScript", "CSS"]
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"title": "JavaScript Fundamentals",
			"school": "Another Online School",
			"dates": 2015,
			"url": "http://www.lycos.com"
		},
		{
			"title": "CSS Basics",
			"school": "Yet Another Online School",
			"dates": 2015,
			"url": "http://www.google.com"
		}
	]
};

function displayMyEducation() {
	for (school in education.schools) {
	    $("#education").append(HTMLschoolStart);
	    
	    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchoolName);

		var formattedSchoolCity = HTMLschoolDegree.replace("%data%", education.schools[school].major);
		$(".education-entry").append(formattedSchoolCity);

		var formattedSchoolGrad = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
		$(".education-entry").append(formattedSchoolGrad);
	}

	for (courses in education.onlineCourses) {
		$("#courses").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
		$(".course-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
		$(".course-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
		$(".course-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
		$(".course-entry:last").append(formattedOnlineURL);
	}
};

displayMyEducation(); 



//END









