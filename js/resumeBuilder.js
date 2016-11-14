var bio = {
    "name" : "Julia Kudinovich",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "julia.kudinovich@gmail.com",
        "mobile" : "123-456-7890",
        "github" : "julia-kudinovich",
        "twitter" : "JuliaK071188",
        "location" : "Las Vegas"
    },
    "biopic" : "images/my_pic.jpg",
    "welcomeMessage" : "Nice to meet you!",
    "skills" : ["html", "css", "bootstrap", "php", "sql"]
};

var work = {
    "jobs" : [{
        "employer" : "American Homes 4 Rent" ,
        "title" : "BI Developer",
        "location" : "Las Vegas, NV",
        "dates" : "October 2015 - Current",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },{
        "employer" : "American Homes 4 Rent",
        "title" : "Pricing and Analytics Staff",
        "location" : "Las Vegas, NV",
        "dates" : "July 2014 - October 2015",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
};

var projects = {
    "projects" : [{
        "title" : "Sample Project 1",
        "dates" : "2016",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images" : ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    },{
        "title" : "Sample Project 2",
        "dates" : "2017",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images" : ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }]
};

var education = {
    "schools" : [{
        "name" : "UCLA",
        "location" : "Los Angeles",
        "degree" : "Bachelor of Science",
        "majors" : ["Math/Applied Science"],
        "dates" : "2014",
        "url" : "http://www.ucla.edu/"
    },{
        "name" : "LAVC",
        "location" : "Los Angeles",
        "degree" : "Transfer",
        "majors" : ["Mathematics"],
        "dates" : "2012",
        "url" : "http://www.lavc.edu/"
        }],
    "onlineDegrees" : [{
        "school" : "UDACITY",
        "title" : "Front-End Web Developer Nanodegree",
        "dates" : "2017",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0 ) {
    $("#header").append(HTMLskillsStart);

    for (i=0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills"). append(formattedSkill);
    }
}

education.display = function() {
    for (i=0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        if (education.schools[i].majors.length > 0 ){
            for (n=0; n < education.schools[i].majors.length ; n++) {
                 var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[n]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    if (education.onlineDegrees.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (i=0; i < education.onlineDegrees.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineDegrees[i].title).replace("#", education.onlineDegrees[i].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineDegrees[i].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineDegrees[i].dates);

            $(".education-entry:last").append(formattedTitleSchool);
            $(".education-entry:last").append(formattedDates);
        }
    }
}



work.display = function() {
    for (i=0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}


projects.display = function() {
    for (i=0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0 ){
            for (n=0; n < projects.projects[i].images.length; n++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[n]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};


work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);