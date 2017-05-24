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

