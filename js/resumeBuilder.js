// Create a new object for bio, education, work & project using JSON(JavaScript Object Notation)
var bio = {
	"name" : "Chee Aik Lim",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "07596756475",
		"email" : "nick.limca@hotmail.com",
		"github" : "RestlessCoder",
		"githublink" : "https://github.com/RestlessCoder",
		"location" : "Belfast, UK"
	},
	"welcomeMessage" : "Welcome to my resume page. I'm self-taught front-end web developer." + 
					      		 " Feel free to check out my GitHub repositories and demo projects",
	"skills" : [
		"Java","HTML", "CSS", "JavaScript"
	],
	"biopic" : "images/Myself-profile.png"

};

var work = {
	"jobs" : [
	  {
	  	"employer" : "China Buffet King",
	  	"title" : "Team Member",
	  	"location" : "Belfast",
	  	"dates" : "2011 - 2015",
	  	"description" : "Provided good customer service, took orders, and delivered food to customers in the most courteous manner." + 
	  					" Worked closely with other wait staff and the kitchen to ensure the restaurant is operated efficiently," + 
	  					" thereby learning skills associated with teamwork."   					
	  }, 
	  {
	  	"employer" : "House of Zen",
	  	"title" : "Kitchen Assistant",
	  	"location" : "Belfast",
	  	"dates" : "2013 - 2014",
	  	"description" : "Entrusted with helping the chef in meeting all demands for the day in a very busy environment."
	  }, 
	  {
	  	"employer" : "Asian Supermarket",
	  	"title" : "Retail Assistant",
	  	"location" : "Belfast",
	  	"dates" : "2007 - 2010",
	  	"description" : "Developed knowledge of products and ability to work efficiently with frequent interruption from customers"  + 
	  					" who needed help in locating items and products. Was charged with the responsibility of serving customers," + 
	  					" restocking, and checking deliveries."
	  }
	]
};

var projects = {
	"projects" : [
	  {
	  	"title" : "My Portfolio",
	  	"dates" : "2017",
	  	"description" : "This is my portfolio web page, and it was my first project for Udacity Front-End Nanodegree." + 
	  					" The project was all about developing a responsive website that look good on all devices."  +
	  					" e.g. desktops, tablets, and phone. The project was built with Bootstrap by using Boostrap's" + 
	  					" grid system and Media Queries to style the responsiveness and organised the web page more efficently.",
	  	"images" : [
	  		"images/Project-1.png",
	  		"images/Project-1(2).png"
	  	]
	  }
	]
};

var education = {
	"schools" : [ 
	  {
		"name" : "University of Leicester",
		"location" : "Leicester",
		"degree" : "BSc",
		"majors" : ["Software & Electronic Engineering"],
		"dates" : "2013 - 2016",
		"url" : "https://le.ac.uk/courses/software-and-electronic-engineering-beng"
	  }
  	],
  	"onlineCourses" : [
  	  {
  	  	"title" : "Front-End Developer Nanodegree",
  	  	"school" : "Udacity",
  	  	"dates" : "2017",
  	  	"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  	  }
  	]

};

// Function for displaying the bio
bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace('%data%', '<a class="contacts-link" href="https://github.com/RestlessCoder">' + bio.contacts.github + '</a>');
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	var HTMLcontact = '<ul id="topContacts" class="flex-box"></ul>'; // Self-Created

	// Select a specify selector and append which is display the value into html website
	$('#header').append(formattedName);
	$('#header').append(formattedRole);
	$('#header').append(HTMLcontact);	// Self-Created
	$('#header').append(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);
	
	// Contact information (header & footer)
	$('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

	// Skills information 
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
};	

// Function for displaying the work experience 
work.display = function() {
	// Create a new div for work experience
	$('#workExperience').append(HTMLworkStart);
	// Using for each loop to iterate an array of objects instead of for in loop 
	// To understand more about forEach(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	work.jobs.forEach(function(job) {
		// Work experience Information		
		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedJoined = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedJoined);

		var formattedDates = HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedDescription);
	});
};

// Function for displaying the projects 
projects.display = function() {
	// Create a new div for project
	$('#projects').append(HTMLprojectStart);
	// This function part of the function part of the outer forEach() loop is really just translating the projects.projects[i] into a local variable called project.
	projects.projects.forEach(function(project) {
		// Project Information 
		var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(formattedDescription); 	

		// To understand this part (https://discussions.udacity.com/t/foreach-loop-question-online-resume-project/179059)
		// This function part of the inner forEach() loop is translating the projects.projects[i].images[j] into a local variable called image. 
		project.images.forEach(function(image){
            var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedprojectImage);
        });
	});
};

// Function for displaying the education
education.display = function() {
	// Create a new div for schools
	$('#education').append(HTMLschoolStart);
	education.schools.forEach(function(school) {
		// Education Information
		var formattedName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
		var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedJoined = formattedName + formattedDegree;
		$('.education-entry:last').append(formattedJoined);

		var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
		$('.education-entry:last').append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
		$('.education-entry:last').append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
		$('.education-entry:last').append(formattedMajor);
     
    });
		
	var HTMLonlineCourses = '<div class="onlineCourse-entry"></div>';	// Self-Created

	// Create a new div for online courses
	$('#education').append(HTMLonlineClasses);
	$('#education').append(HTMLonlineCourses);	// Self-Created

	for(var x = 0; x < education.onlineCourses.length; x++) {
		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[x].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[x].school);
		var formattedJoin = formattedTitle + formattedSchool;
		$('.onlineCourse-entry:last').append(formattedJoin);

		var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[x].dates);
		$('.onlineCourse-entry:last').append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[x].url);
		$('.onlineCourse-entry:last').append(formattedUrl);

		// Find the attritube of 'a' in onlineCourse class
		var findChildren = $('.onlineCourse-entry').find('a');
		findChildren.attr('href', 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001');
	}
};	

/*		Main(Call function)			*/
bio.display();
work.display();
projects.display();
education.display();

// Google Map
$('#mapDiv').append(googleMap);