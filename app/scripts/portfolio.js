'use strict';

angular
.module('mashaPortfolioAngularApp').
factory('portfolio', ['$sce', function($sce) {
    var VIDEO = 'video',
        MOBILE = 'mobile',
        WEB = 'web',
        ILLUSTRATION = 'illustration',
        DATA_VIS = 'data visualization',
        PHOTO = 'photo';

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
        }, {
            name: PHOTO,
            title: 'Photography'
        }
    ];

    var raceTheBunny = {
        title: 'race the bunny',
        id: 'race-the-bunny',
        image: 'images/thumbs/race.png',
        groups: [MOBILE],
        description: 'This is my thesis project for the Academy of Art University. It is a map-based mobile application. It helps people who are running late to get to their destination on time. Basically, the  user plays a simple game: racing with a bunny, that shows a required speed to get on time, for a carrot, which represents the user’s destination. To get more information, please check <a href="http://rtb-promo.marvladimirovna.com/" target="new">this website</a>.',
        attachments: [
            {
                image: 'images/bunny/race_the_bunny.png'
            },
            // {
            //     text: 'Paul Graham, a venture capitalist,  advises entrepreneurs to leave the sexy-sounding business ideas behind and instead build for their own needs: “‘instead of asking ‘what problem I solve ?’ ask ‘what problem do I wish someone else would solve for me?’” I wished somebody would solve a “being late” problem.'
            // },
            {
                image: 'images/race/smart_watches.png'
            },
            {
                image: 'images/bunny/screens.png'
            },
            {
                image: 'images/race/last_screen.jpg'
            },
            {
                image: 'images/race/evolution.gif'
            },
            {
                image: 'images/race/icons_3.png'
            },
            {
                image: 'images/race/icons_2.png'
            },
            {
                image: 'images/race/icons_1.png'
            },
            {
                html: $sce.trustAsHtml('<iframe class="marvel-proto" src="https://marvelapp.com/gehdhe?emb=1" width="443" height="933" allowTransparency="true" frameborder="0"></iframe>')
            }
        ]
    };

    var chewWell = {
        title: 'chew well',
        id: 'chew-well',
        image: 'images/thumbs/chew.png',
        groups: [MOBILE],
        description: 'Chew well is an application that helps to improve your health by slowly chewing food. You can set up a timer for each bite and get an alert when it is time for the next one. <a target="_blank" href="https://itunes.apple.com/us/app/chew-well/id879994842?mt=8">download ios</a>',
        attachments: [
            {
                image: 'images/chew/chew_well.png'
            }
        ]
    };

    var airHockey = {
        title: 'air hockey',
        id: 'air-hockey',
        image: 'images/thumbs/airhockey.png',
        description: $sce.trustAsHtml('Air hockey is a mobile version of a game for all air hockey lovers. I worked as a designer on this weekend project. The design is clean and simple in a flat style. Enjoy! <a target="_blank" href="https://itunes.apple.com/us/app/flat-air-hockey/id879369254?mt=8">download ios</a> / <a target="_blank" href="https://play.google.com/store/apps/details?id=com.romani.airhockey">download android</a>'),
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/airhockey/airhockey.png'
            }
        ]
    };

    var foodVis = {
        title: 'food visualization',
        id: 'food-visualization',
        image: 'images/thumbs/food.png',
        description: $sce.trustAsHtml('This is a PNG version of a website where you can find out what kind of food I ate fall 2014. I collected the data over a couple months to see the pattern and then visualized it. Click <a href="info_big.png" target="_blank">here</a> to see it in a good resolution with more details.'),
        groups: [DATA_VIS],
        attachments: [
            {
                image: 'images/viz/food.png'
            }
        ]
    };

    var musicVis = {
        title: 'music visualization',
        id: 'music-visualization',
        image: 'images/thumbs/music.png',
        description: $sce.trustAsHtml('This data visualization shows my listening habits during winter 2014. I was collecting data about my music from my Pandora account by using lastfm scrobbler, IFTTT.com and Echonext API. It is a fully functional website, so check it out <a target="_blank" href="http://infog.marvladimirovna.com/">here</a> (please be patient while it loads...).'),
        groups: [DATA_VIS],
        attachments: [
            {
                image: 'images/viz/music.png'
            }
        ]
    };

    var hyperLoop = {
        title: 'hyper loop',
        id: 'hyper-loop',
        image: 'images/thumbs/hyperloop.png',
        description: $sce.trustAsHtml('It\'s a concept of a website for Hyperloop, a train built on innovative transportation technology (http://www.teslamotors.com/blog/hyperloop). I created a web page advertising the Hyperloop to potential passengers. I kept responsiveness in mind: the design is easily translated to a mobile platform.'),
        groups: [WEB],
        attachments: [
            {
               image: 'images/hyper/hyperloop_big.png'
            }
        ]
    };

    var beardMen = {
        title: '8-bit beard men',
        id: '8-bit-beard-men',
        image: 'images/thumbs/pixels.png',
        description: $sce.trustAsHtml('Once I tried to create an illustration in 8bit style I become obsessed. It was a fun project for me to create beard men in different clothing. You can find here superheroes and characters from daily life. Click <a target="_blank" href="https://instagram.com/pixelmarvla/">here</a> to see the instagram of this project.'),
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: 'images/pixel/pixel_big.png'
            }
        ]
    };

    var origami = {
        title: 'origami illustrations',
        id: 'origami-illustrations',
        image: 'images/thumbs/origami.png',
        description: $sce.trustAsHtml('I like the origami art, so I tried this style in photoshop. For each picture I have a reference photo or simple tutorial, which helps me to understand how the figure is folded. Here is an <a target="_blank" href="https://instagram.com/origamimarvla/">instagram account</a> for this origami project. I am trying to keep it updated from time to time.'),
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: 'images/origami/apple.png'
            },
            {
                image: 'images/origami/bird.jpg'
            },
            {
                image: 'images/origami/foldable_letter.jpg'
            },
            {
                image: 'images/origami/mouse.jpg'
            },
            {
                image: 'images/origami/penguin.jpg'
            },
            {
                image: 'images/origami/rabbbit.png'
            },
            {
                image: 'images/origami/rabbit.jpg'
            },
            {
                image: 'images/origami/ship.jpg'
            },
            {
                image: 'images/origami/swan.jpg'
            },
            {
                image: 'images/origami/umbrella.jpg'
            }
        ]
    };

    var videos = {
        title: 'videos',
        id: 'videos',
        image: 'images/thumbs/video.png',
        description: $sce.trustAsHtml('Here are some videos from my internship at mixbit.com as a motion graphic intern and videos that I created for fun. If you would like to see more works that I did at mixbit.com, please check it <a target="new" href="https://www.youtube.com/playlist?list=PLNexlchFah07BdQQHOgoFJ2-uX0CFkKxG">here</a>'),
        groups: [VIDEO],
        attachments: [
            {
                html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116809195" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            },
            {
                html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116808992" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            },
            {
                html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116804000" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            },
            {
                html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/67361831" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            },
            {
                html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/63626739" width="500" height="367" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            }
        ]
    };

    var weather = {
        title: 'weather closet',
        id: 'weather',
        image: 'images/thumbs/weather.png',
        description: 'This is a concept of a responsive website, which shows not only temperature numbers, but also suggests the actual clothing to wear (layer, rain coat, umbrella etc). Also this website is a place, where you can check and compare what to wear in different place. It could be really useful if you travel a lot.',
        groups: [WEB],
        attachments: [
            {
                image: 'images/weather/weather_mobile.gif'
            }
        ]
    };

    var photo = {
        title: 'photography',
        id: 'photo',
        image: 'images/thumbs/photo.png',
        description: 'Here are my photos from different places around the world in the photo miniature style.',
        groups: [PHOTO],
        attachments: [
            {
                image: 'images/photos/alaska.jpg'
            },
            {
                image: 'images/photos/sun.jpg'
            },
            {
                image: 'images/photos/tilt2.jpg'
            },
            {
                image: 'images/photos/tilt_shift.jpg'
            },
            {
                image: 'images/photos/shift.jpg'
            }
        ]
    };

    var eggTimer = {
        title: 'egg timer',
        id: 'egg-timer',
        image: 'images/thumbs/egg5.png',
        description: 'Here’s a concept of a simple mobile app - egg timer. It’s easy and fun to use.',
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/eggs/eggs.png'
            }
        ]
    };

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
        weather,
        photo,
        eggTimer
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
}]);