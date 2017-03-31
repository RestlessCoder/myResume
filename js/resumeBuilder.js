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
	"welcomeMessage" : "Welcome to my resume page. I'm self-taught front-end web developer." 
					   + " Feel free to check out my GitHub repositories and demo projects",
	"skills" : [
		"HTML", "CSS", "JavaScript"
	],
	"biopic" : "images/Myself-profile.png"

}

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
		formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		formattedGitHub = HTMLgithub.replace('%data%', '<a class="contacts-link" href="https://github.com/RestlessCoder">' + bio.contacts.github + '</a>');
		formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	// Select a specify selector and append which is display the value into html website
	$('#header').append(formattedName);
	$('#header').append(formattedRole);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);
	
	// Contact information
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGitHub);
	$('#topContacts').append(formattedLocation);

	// Skills information 
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			if(bio.skills.hasOwnProperty(skill)) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
				$('#skills').append(formattedSkill);
			}
		}
	}
}	

/*		Main(Call function)			*/
bio.display();

