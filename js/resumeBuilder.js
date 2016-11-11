var formattedName = HTMLheaderName.replace("%data%", "Julia");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var skills= ["awesomness", "programming"];

var bio = {
    "name" : "Julia",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "julia.kudinovich@gmail.com",
        "mobile" : "123-456-7890",
        "github" : "julia-kudinovich",
        "location" : "Las Vegas"
    },
    "picture URL" : "i,ages/197x148.jpg",
    "welcome message" : "Nice to meet you!",
    "skills" : skills
};


var  work = {};
work.position = "BI developer";
work.employer = "AH4R";
work.years = "2.5";
work.city = "Las Vegas, NV";

var eduction = {};
education["name"] = "UCLA";
education["years"] = "2012-2014";
education["city"] = "Los Angeles, CA";

$("#main").append(work["position"]);
$("#main").append(education.name);
