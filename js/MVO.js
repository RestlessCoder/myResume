/* ======== Model ========= */
var model = {
	bio: {
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
		"skills" : ["Java","HTML", "CSS", "JavaScript"],
		"biopic" : "images/Myself-profile.png"

	},

	work: {
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
	},

	projects : {
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
	},

	education : {
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

	}
}; // End of Model


/* ======== Octopus ========= */

var octopus = {

	init: function() {
		viewBio.init();
	},

	/*
     * @function model.getAllBio
     * @description returns the Projects information
     * @returns {Object} JSON Projects object        
     */
	getAllBio: function() {
		return model.bio;
	},

	/*
     * @function model.getAllWork
     * @description returns the Projects information
     * @returns {Object} JSON Projects object        
     */
	getAllWork: function() {
		return model.work;
	},

	/*
     * @function model.getAllProjects
     * @description returns the Projects information
     * @returns {Object} JSON Projects object        
     */
	getAllProject: function() {
		return model.projects;
	},

	/*
     * @function model.getAllEducation
     * @description returns the Projects information
     * @returns {Object} JSON Projects object        
     */
	getAllEducation: function() {
		return model.education;
	}
}


/* ======== View ========= */
var viewBio = {
	
	/*
     * @function viewBio.init
     * @description inialises the application view viewBio.
     * Initialises the views HTML template strings and gets the Bio JSON object.
     */
	init: function() {

		HTMLheaderName = '<h1 id="name">%data%</h1>';
		HTMLheaderRole = '<span>%data%</span><hr>';

		HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
		HTMLmobile = '<li class="flex-item"><i class="fa fa-mobile fa-lg" aria-hidden="true"></i><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
		HTMLemail = '<li class="flex-item"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
		HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
		HTMLgithub = '<li class="flex-item"><i class="fa fa-github fa-lg" aria-hidden="true"></i><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
		HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
		HTMLlocation = '<li class="flex-item"><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

		HTMLbioPic = '<img src="%data%" class="biopic">';
		HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

		HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
		HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

		this.render();
	},

	/*
     * @function viewBio.render
     * @description Displays the individual's biographical information using the
     * bio JSON object and the views HTML template strings.
    */
	render: function() {

		// Get all the bio we'll be rendering from the octopus
		var bio = octopus.getAllBio();

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

	}

}; // End of viewBio

// Make it go
octopus.init();