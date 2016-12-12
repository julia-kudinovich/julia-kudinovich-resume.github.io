var model = {
    bio: {
        "name": "Julia Kudinovich",
        "role": "Web Developer",
        "contacts": {
            "email": "julia.kudinovich@gmail.com",
            "mobile": "123-456-7890",
            "github": "julia-kudinovich",
            "twitter": "JuliaK071188",
            "linkedIn": "https://www.linkedin.com/in/juliakudinovich",
            "location": "Las Vegas"
        },
        "biopic": "images/my_pic.jpg",
        "welcomeMessage": "Welcome to my online resume!",
        "skills": ["html", "css", "bootstrap", "php", "sql", "javascript"]
    },
    work: {
        "jobs": [{
            "employer": "American Homes 4 Rent",
            "title": "BI Developer",
            "location": "Las Vegas, NV",
            "dates": "October 2015 - Current",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "url": "https://www.americanhomes4rent.com/"
        },{
            "employer": "American Homes 4 Rent",
            "title": "Pricing and Analytics Staff",
            "location": "Las Vegas, NV",
            "dates": "July 2014 - October 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "url": "https://www.americanhomes4rent.com/"
        }]
    },

    projects: {
        "projects": [{
            "title": "Sample Project 1",
            "dates": "2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
            }, {
            "title": "Sample Project 2",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
        }]
    },

    education: {
        "schools": [{
            "name": "UCLA",
            "location": "Los Angeles",
            "degree": "Bachelor of Science",
            "majors": ["Math/Applied Science"],
            "dates": "2014",
            "url": "http://www.ucla.edu/"
        }, {
            "name": "LAVC",
            "location": "Los Angeles",
            "degree": "Transfer",
            "majors": ["Mathematics"],
            "dates": "2012",
            "url": "http://www.lavc.edu/"
        }],
        "onlineCourses": [{
            "school": "UDACITY",
            "title": "Front-End Web Developer Nanodegree",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
        }]
    }
};


var octopus = {
    init: function(){
        resumeView.init();
    },

    getBio: function() {
        return model.bio;
    },

    getWork: function() {
        return model.work;
    },

    getProjects: function() {
        return model.projects;
    },

    getEducation: function() {
        return model.education;
    }

    /*,getLocations: function(){
        var locations = [];
        locations.push(model.bio.contacts.location);
        model.education.schools.forEach(function(school){
            locations.push(school.location);
        });
        model.work.jobs.forEach(function(job){
            locations.push(job.location);
        });

        return locations;
    }*/
};

var resumeView = {
    init: function(){
        this.data = '%data%';
        this.renderBio();
        this.renderWork();
        this.renderProjects();
        this.renderEducation();
        this.renderGoogleMaps();

    },

    renderBio: function() {
        var bio = octopus.getBio();
        var formattedName = HTMLheaderName.replace(this.data, bio.name);
        var formattedRole = HTMLheaderRole.replace(this.data, bio.role);
        var foramttedBioPic = HTMLbioPic.replace(this.data, bio.biopic);
        var foramttedWelcomeMsg = HTMLwelcomeMsg.replace(this.data, bio.welcomeMessage);
        var foramttedMobile = HTMLmobile.replace(this.data, bio.contacts.mobile);
        var foramttedEmail = HTMLemail.replace(this.data, bio.contacts.email);
        var foramttedTwitter = HTMLtwitter.replace(this.data, bio.contacts.twitter);
        var foramttedGithub = HTMLgithub.replace(this.data, bio.contacts.github);
        var foramttedGithubUrl = HTMLgithubUrl.replace("#", "https://github.com/" + bio.contacts.github);
        var foramttedLinkedInUrl = HTMLLinkedIn.replace("#", bio.contacts.linkedIn);
        var foramttedLocation = HTMLlocation.replace(this.data, bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(foramttedBioPic);
        $("#header").append(foramttedWelcomeMsg);
        $("#topContacts, #footerContacts").append(foramttedMobile, foramttedEmail);
        $("#topContacts").append(foramttedTwitter, foramttedGithub, foramttedLocation);
        $("#footerContacts").append(foramttedLinkedInUrl, foramttedGithubUrl);


        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    },

    renderWork: function(){
        var work = octopus.getWork();

        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(this.data, work.jobs[i].employer).replace("#", work.jobs[i].url);
            var formattedTitle = HTMLworkTitle.replace(this.data, work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace(this.data, work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace(this.data, work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace(this.data, work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    },

    renderProjects: function(){
        var projects = octopus.getProjects();
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(this.data, projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(this.data, projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace(this.data, projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (n = 0; n < projects.projects[i].images.length; n++) {
                    var formattedImage = HTMLprojectImage.replace(this.data, projects.projects[i].images[n]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    },

    renderEducation: function(){
        var education = octopus.getEducation();
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace(this.data, education.schools[i].name).replace("#", education.schools[i].url);
            var formattedDegree = HTMLschoolDegree.replace(this.data, education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace(this.data, education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace(this.data, education.schools[i].location);

            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);

            if (education.schools[i].majors.length > 0) {
                for (n = 0; n < education.schools[i].majors.length; n++) {
                    var formattedMajor = HTMLschoolMajor.replace(this.data, education.schools[i].majors[n]);
                    $(".education-entry:last").append(formattedMajor);
                }
            }
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace(this.data, education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedSchool = HTMLonlineSchool.replace(this.data, education.onlineCourses[i].school);
                var formattedTitleSchool = formattedTitle + formattedSchool;
                var formattedDatesOnline = HTMLonlineDates.replace(this.data, education.onlineCourses[i].dates);

                $(".education-entry:last").append(formattedTitleSchool);
                $(".education-entry:last").append(formattedDatesOnline);
            }
        }
    },

    renderGoogleMaps: function() {
        //var locations = octopus.getLocations();
        $("#mapDiv").append(googleMap);
    }
};



octopus.init();