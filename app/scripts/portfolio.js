'use strict';

angular
.module('mashaPortfolioAngularApp').
factory('portfolio', function() {
    var pl = 'http://placehold.it/500x500';
    var bigPl = 'http://placehold.it/1000x600';

    var VIDEO = 'video',
        MOBILE = 'mobile',
        WEB = 'web',
        ILLUSTRATION = 'illustration',
        DATA_VIS = 'data visualization';

    var categories = [
        {
            name: 'all',
            title: 'All'
        },
        {
            name: MOBILE,
            title: 'Mobile'
        }, {
            name: WEB,
            title: 'Web',
        }, {
            name: VIDEO,
            title: 'Video'
        }, {
            name: ILLUSTRATION,
            title: 'Illustration'
        }, {
            name: DATA_VIS,
            title: 'Data visualization'
        }
    ];

    var raceTheBunny = {
        title: 'race the bunny',
        id: 'race-the-bunny',
        image: 'images/thumbs/bunny.png',
        groups: [WEB, MOBILE],
        description: 'This is my thesis project for the Academy of Art University. It is a map-based mobile application. It helps people who are running late to get to their destination on time. Basically, the  user plays a simple game: racing with a bunny, that shows a required speed to get on time, for a carrot, which represents the user’s destination.',
        attachments: [
            {
                image: 'images/bunny/screens.png'
            },
            {
                image: 'images/bunny/race_the_bunny.png'
            },
            {
                image: 'images/bunny/last_screen.png'
            }
        ]
    };

    var chewWell = {
        title: 'chew well',
        id: 'chew-well',
        image: 'images/thumbs/chew.png',
        groups: [MOBILE],
        description: 'Chew well is an application that helps to improve your health by slowly chewing food. You can set up a timer for each bite and get an alert when it is time for the next one.',
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var airHockey = {
        title: 'air hockey',
        id: 'air-hockey',
        image: 'images/thumbs/airhockey.png',
        description: 'Air hockey is a mobile version of a game for all air hockey lovers. I worked as a designer on this weekend project. The design is clean and simple in a flat style. Enjoy!',
        groups: [MOBILE],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var foodVis = {
        title: 'food visualization',
        id: 'food-visualization',
        image: 'images/thumbs/food.png',
        description: 'This is a PNG version of a website where you can find out what kind of food I ate last fall. I collected the data over a couple months to see the pattern and then visualized. Click on an image to see more details.',
        groups: [DATA_VIS],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var musicVis = {
        title: 'music visualization',
        id: 'music-visualization',
        image: 'images/thumbs/music.png',
        description: 'This data visualization shows my listening habits during winter 2014. I was collecting data about my music by using lastfm scrobbler, IFTTT.com and Echonext API. It is a website, so check it out here (please be patient while it loads...)',
        groups: [DATA_VIS],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var hyperLoop = {
        title: 'hyper loop',
        id: 'hyper-loop',
        image: 'images/thumbs/hyper.png',
        description: 'It\'s a concept for a hyperloop website. The source of information is this blog (http://www.teslamotors.com/sites/default/files/blog_attachments/hyperloop_alpha3.pdf)',
        groups: [WEB],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var beardMen = {
        title: '8-bit beard men',
        id: '8-bit-beard-men',
        image: 'images/thumbs/beards.png',
        description: 'Once I tried to create an illustration in 8-bit style I become obsessed. It was a fun project for me to create beard men in different clothing. You can find here superheroes and characters from daily life. Click here to see the instagram of this project.',
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var origami = {
        title: 'origami illustrations',
        id: 'origami-illustrations',
        image: 'images/thumbs/origami.png',
        description: 'Here is an instagram account for this origami project. I am trying to keep it updated and add a new illustration at least once a week.',
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    var videos = {
        title: 'videos',
        id: 'videos',
        image: pl,
        description: 'Here are some videos from my internship at mixbit.com and videos that I created for fun.',
        groups: [VIDEO],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    };

    // var fireMan = {
    //     title: 'meet fireman video',
    //     id: 'meet-fireman-video',
    //     image: pl,
    //     groups: [VIDEO],
    //     attachments: [
    //         {
    //             image: bigPl
    //         },
    //         {
    //             image: bigPl
    //         },
    //         {
    //             image: bigPl
    //         }
    //     ]
    // };

    // var ballet = {
    //     title: 'ballet video',
    //     id: 'ballet-video',
    //     image: pl,
    //     groups: [VIDEO],
    //     attachments: [
    //         {
    //             image: bigPl
    //         },
    //         {
    //             image: bigPl
    //         },
    //         {
    //             image: bigPl
    //         }
    //     ]
    // };

    var weather = {
        title: 'Weather',
        id: 'weather',
        image: pl,
        description: 'The problem is that sometimes when you see the numbers, you can not actually understand how you need to dress up. The idea of the responsive website is to show not only actual information but also a character that would wear some suggested clothing for that kind of weather (layer, rain coat, umbrella etc). The goal is to create a user-friendly interface and useful suggestions for the user.',
        groups: [WEB],
        attachments: [
            {
                image: bigPl
            },
            {
                image: bigPl
            },
            {
                image: bigPl
            }
        ]
    }

    var works = [
        raceTheBunny, 
        foodVis,
        chewWell,
        airHockey,
        musicVis,
        beardMen,
        origami,
        videos,
        hyperLoop,
        // fireMan,
        // ballet,
        weather
    ];

    function findPos(id) {
        for (var i = 0; i < works.length; i++) {
            if (works[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    function workById(id) {
        var pos = findPos(id);
        if (pos === -1) {
            return null;
        } else {
            return works[pos];
        }
    }

    function getPrev(id) {
        var pos = findPos(id);
        if (pos === -1) {
            return null;
        } else if (pos === 0) {
            return works[works.length - 1].id;
        }  else {
            return works[pos-1].id;
        }
    }

    function getNext(id) {
        var pos = findPos(id);
        if (pos === -1) {
            return null;
        } else if (pos === works.length - 1) {
            return works[0].id;
        }  else {
            return works[pos+1].id;
        }
    }

  var portfolioPieces = {
    works: works,
    categories: categories,
    workById: workById,
    getNext: getNext,
    getPrev: getPrev
  };
  return portfolioPieces;
});