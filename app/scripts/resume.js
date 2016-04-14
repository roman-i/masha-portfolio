'use strict';


angular
.module('mashaPortfolioAngularApp')
.factory('resume', function() {
  return {
    "basics": {
      "name": "Mariya Yukhimenko",
      "label": "UI / UX Designer",
      "picture": "",
      "email": "marvladimirovna@gmail.com",
      "phone": "+1 (408) 685 5486",
      "website": "http://www.marvladimirovna.com",
      "summary": "UI / UX Designer",
      "location": {
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      },
      "profiles": [{
        "network": "LinkedIn",
        "url": "https://www.linkedin.com/in/mariyayukhimenko"
      },{
        "network": "Dribbble",
        "url": "https://dribbble.com/mariya-yukhimenko"
      }]
    },
    "work": [{
      "company": "kimkim",
      "position": "UI / UX designer",
      "website": "http://www.kimkim.com/",
      "startDate": "2016-02-01",
      "endDate": "2016-03-01",
      "summary": "working on multiple projects as UX and UI designer"
    },{
      "company": "y media labs",
      "position": "UI / UX designer",
      "website": "http://www.ymedialabs.com/",
      "startDate": "2015-06-01",
      "endDate": "2016-02-01",
      "summary": "working on multiple projects as UX and UI designer"
    },{
      "company": "mixbit.com",
      "position": "motion graphic intern",
      "website": "http://mixbit.com/",
      "startDate": "2014-06-01",
      "endDate": "2014-08-01",
      "summary": "worked on two motion graphic themes: birthday and shimmer (creating and editing in After Effects)"
    },{
      "company": "stohke.com",
      "position": "design Intern",
      "website": "http://STOHKE.COM/",
      "startDate": "2014-04-01",
      "endDate": "2014-08-01",
      "summary": "developed ux design for the website and its mobile version, created mockups, graphics and ui elements"
    }],
    "education": [{
      "institution": "academy of art university",
      "area": "MFA at Web Design",
      "studyType": "Bachelor",
      "startDate": "2012-06-01",
      "endDate": "2015-05-01"
    }],
    "skills": [{
        "name": "Photoshop"
      },{
        "name": "Illustrator"
      },{
        "name": "After effects"
      },{
        "name": "Indesign"
      },{
        "name": "Invision"
      },{
        "name": "Sketch"
    }]
  };
});