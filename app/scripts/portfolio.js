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
        description: 'This is my thesis project for the Academy of Art University. It is a map-based mobile application. It helps people who are running late to get to their destination on time. Basically, the  user plays a simple game: racing with a bunny, that shows a required speed to get on time, for a carrot, which represents the user’s destination.',
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
            // {
            //     image: 'images/race/last_screen.jpg'
            // },
            // {
            //     html: $sce.trustAsHtml('<img src="images/race/evolution.gif" style="max-width: 130px"/>')
            // },
            {
                image: 'images/bunny/_blender_icons_for_website.png'
            },
            {
                image: 'images/bunny/_blender_icons_for_website_2.png'
            }
        ],
        tools: [
            'Blender',
            'Illustrator',
            'After Effects',
            'Photoshop'
        ],
        timeframe: [
            'First rough sketch created in Summer 2013',
            'Final product presented in Spring 2015'
        ],
        work_type: 'Thesis project for the MFA program at the Academy of Art University'
    };

    var calendarApp = {
        title: 'calendar app',
        id: 'calendar-app',
        image: 'images/thumbs/calendar_thumbnails.png',
        groups: [MOBILE],
        description: 'It was a weekend project: conceptualizing the calendar app and creating a clean and friendly experience for users. More screens are coming soon.',
        attachments: [
            {
                image: 'images/calendar/calendar.gif'
            }
        ],
        tools: [
            'Photoshop',
            'Illustrator',
            'After Effects',
            'Sketch'
        ],
        timeframe: [
            'Weekend project'
        ],
        work_type: 'Personal project'
    };

    // var chewWell = {
    //     title: 'chew well',
    //     id: 'chew-well',
    //     image: 'images/thumbs/chew.png',
    //     groups: [MOBILE],
    //     description: 'Chew well is an application that helps to improve your health by slowly chewing food. You can set up a timer for each bite and get an alert when it is time for the next one. <a target="_blank" href="https://itunes.apple.com/us/app/chew-well/id879994842?mt=8">download ios</a>',
    //     attachments: [
    //         {
    //             image: 'images/chew/chew_well.png'
    //         }
    //     ]
    // };

    // var airHockey = {
    //     title: 'air hockey',
    //     id: 'air-hockey',
    //     image: 'images/thumbs/airhockey.png',
    //     description: $sce.trustAsHtml('Air hockey is a mobile version of a game for all air hockey lovers. I worked as a designer on this weekend project. The design is clean and simple in a flat style. Enjoy! <a target="_blank" href="https://itunes.apple.com/us/app/flat-air-hockey/id879369254?mt=8">download ios</a> / <a target="_blank" href="https://play.google.com/store/apps/details?id=com.romani.airhockey">download android</a>'),
    //     groups: [MOBILE],
    //     attachments: [
    //         {
    //             image: 'images/airhockey/airhockey.png'
    //         }
    //     ]
    // };

    var foodVis = {
        title: 'food visualization',
        id: 'food-visualization',
        image: 'images/thumbs/food_info_thumb_nail.png',
        description: $sce.trustAsHtml('This is a PNG version of a website where you can find out what kind of food I ate fall 2014. I collected the data over a couple months to see the pattern and then visualized it. Click <a href="info_big.png" target="_blank">here</a> to see it in a good resolution with more details.'),
        groups: [DATA_VIS],
        attachments: [
            {
                image: 'images/viz/food.png'
            }
        ],
        tools: [
            'Illustrator'
        ],
        timeframe: [
            '3 weeks from initial drafts to the final pdf version'
        ],
        work_type: 'Final project for the data visualisation class in the Academy of Art University'
    };

    var mittens = {
        title: 'mittens app',
        id: 'mittens',
        image: 'images/thumbs/thumbnail_mittens.png',
        description: 'I had a short break during the Christmas time, so I decided to create something festive and fun for holidays. It’s an memory app, where the user should pair two mittens with the same ornament by tapping on each to flip and see the actual ornament.',
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/mittens/pair_mittens_web.gif'
            },
            {
                image: 'images/mittens/icons_mittens.png'
            }
        ],
        tools: [
            'Sketch',
            'After Effects',
            'Illustrator',
            'Photoshop'
        ],
        timeframe: [
            'Weekend project'
        ],
        work_type: 'Personal project'  
    };

    var tipCalculator = {
        title: 'tip calculator',
        id: 'tip',
        image: 'images/thumbs/tips_thumb_nail.png',
        description: 'It was a weekend project collaboratively with my husband Roman Inozemtsev. The app that calculates the tips for you in a simple and minimal design. Roman coded this app. It’s releasing soon in app store.',
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/tip/tips_web.gif'
            }
        ],
        tools: [
            'Sketch',
            'Illustrator',
            'After Effects',
            'Photoshop'
        ],
        timeframe: [
            'Weekend project in collaboration with ios engineer'
        ],
        work_type: 'Personal project'     
    };

    var gasStation = {
        title: 'gas station app',
        id: 'gas',
        image: 'images/thumbs/gas_thumbnail.png',
        description: 'By using this app you can pay and activate the actual pump on a gas station. By simply clicking on big button pump on an app home screen you are provided with options of gas types and money amount that you wanna spend on it. *The full prototype is available upon request.',
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/gas/gas_web.gif'
            }
        ],
        tools: [
            'Sketch',
            'After Effects',
            'Illustrator',
            'Photoshop'
        ],
        timeframe: [
            '1 month'
        ],
        work_type: 'A client project'     
    };

    var bankApp = {
        title: 'bank app',
        id: 'bank',
        image: 'images/thumbs/bank_thumb_nail.png',
        description: 'A concept for banking app. As you can see by tapping on a view statistics you can see the graph. If you slide the stats screen up the graph will collapse to a smaller size. This concept was developed during my work at Y Media Labs. *The full prototype is available upon request.',
        groups: [MOBILE],
        attachments: [
            {
                image: 'images/bank/bank_web.gif'
            }
        ],
        tools: [
            'Sketch',
            'After Effects',
            'Illustrator',
            'Photoshop'
        ],
        timeframe: [
            '1 week from initial sketches to production'
        ],
        work_type: 'Experimental work for a client'
    };

    var musicVis = {
        title: 'music visualization',
        id: 'music-visualization',
        image: 'images/thumbs/thumbnail_music_info.png',
        description: $sce.trustAsHtml('This data visualization shows my listening habits during winter 2014. I was collecting data about my music from my Pandora account by using lastfm scrobbler, IFTTT.com and Echonext API. It is a fully functional website, so check it out <a target="_blank" href="http://infog.marvladimirovna.com/">here</a> (please be patient while it loads...).'),
        groups: [DATA_VIS],
        attachments: [
            {
                image: 'images/viz/music.png'
            }
        ],
        tools: [
            'D3',
            'JavaScript',
            'CSS3',
            'HTML5',
            'Illustrator'
        ],
        timeframe: [
            '3 weeks from initial drafts to the final web version'
        ],
        work_type: 'Final project for the data visualisation class in the Academy of Art University'   
    };

    // var hyperLoop = {
    //     title: 'hyper loop',
    //     id: 'hyper-loop',
    //     image: 'images/thumbs/hyperloop.png',
    //     description: $sce.trustAsHtml('It\'s a concept of a website for Hyperloop, a train built on <a href="http://www.teslamotors.com/blog/hyperloop" target="_blank">innovative transportation technology</a>. I created a web page advertising the Hyperloop to potential passengers. I kept responsiveness in mind: the design is easily translated to a mobile platform. Please check this <a href="http://www.marvladimirovna.com/yukhimenko_hyperloop.pdf" target="_blank">high fidelity version</a>.'),
    //     groups: [WEB],
    //     attachments: [
    //         {
    //            image: 'images/hyper/hyperloop_big.png'
    //         }
    //     ]
    // };

    var beardMen = {
        title: '8-bit beard men',
        id: '8-bit-beard-men',
        image: 'images/thumbs/pixels.png',
        description: $sce.trustAsHtml('Once I tried to create an illustration in 8bit style I become obsessed. It was a fun project for me to create beard men in different clothing. You can find here superheroes and characters from daily life. Click <a target="_blank" href="https://society6.com/mariyayukhimenko">here</a> to purchase it on society6.'),
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: 'images/pixel/pixel_big.png'
            }
        ],
        tools: [
            'Photoshop',
            'Illustrator'
        ],
        timeframe: [
            '1 week (several characters every day)'
        ],
        work_type: 'Personal project'
    };

    var musicApp = {
        title: 'music app',
        id: 'music-app',
        image: 'images/thumbs/music_thumbnail.png',
        description: 'This app is for melomans, for people who truly appreciate music. Most of the time my friends and I listen to music on the phone. Sometimes I want to leave a mood note while listening. So this app is a music diary, when you can leave notes and listen to music at the same time. This app provides the data analysis of music to see the behavioral patterns.',
        groups: [ILLUSTRATION],
        attachments: [
            {
                image: 'images/music-app/music_web.png'
            }
        ],
        tools: [
            'Sketch'
        ],
        timeframe: [
            'Weekend project'
        ],
        work_type: 'Personal project'
    };

    // var origami = {
    //     title: 'origami illustrations',
    //     id: 'origami-illustrations',
    //     image: 'images/thumbs/origami.png',
    //     description: $sce.trustAsHtml('I like the origami art, so I tried this style in photoshop. For each picture I have a reference photo or simple tutorial, which helps me to understand how the figure is folded. Here is an <a target="_blank" href="https://instagram.com/origamimarvla/">instagram account</a> for this origami project. I am trying to keep it updated from time to time.'),
    //     groups: [ILLUSTRATION],
    //     attachments: [
    //         {
    //             image: 'images/origami/apple.png'
    //         },
    //         {
    //             image: 'images/origami/bird.jpg'
    //         },
    //         {
    //             image: 'images/origami/foldable_letter.jpg'
    //         },
    //         {
    //             image: 'images/origami/mouse.jpg'
    //         },
    //         {
    //             image: 'images/origami/penguin.jpg'
    //         },
    //         {
    //             image: 'images/origami/rabbbit.png'
    //         },
    //         {
    //             image: 'images/origami/rabbit.jpg'
    //         },
    //         {
    //             image: 'images/origami/ship.jpg'
    //         },
    //         {
    //             image: 'images/origami/swan.jpg'
    //         },
    //         {
    //             image: 'images/origami/umbrella.jpg'
    //         }
    //     ]
    // };

    // var videos = {
    //     title: 'videos',
    //     id: 'videos',
    //     image: 'images/thumbs/video.png',
    //     description: $sce.trustAsHtml('Here are some videos from my internship at mixbit.com as a motion graphic intern and videos that I created for fun. If you would like to see more works that I did at mixbit.com, please check it <a target="new" href="https://www.youtube.com/playlist?list=PLNexlchFah07BdQQHOgoFJ2-uX0CFkKxG">here</a>'),
    //     groups: [VIDEO],
    //     attachments: [
    //         {
    //             html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116809195" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    //         },
    //         {
    //             html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116808992" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    //         },
    //         {
    //             html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/116804000" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    //         },
    //         {
    //             html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/67361831" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    //         },
    //         {
    //             html: $sce.trustAsHtml('<iframe src="https://player.vimeo.com/video/63626739" width="500" height="367" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    //         }
    //     ]
    // };

    // var weather = {
    //     title: 'weather closet',
    //     id: 'weather',
    //     image: 'images/thumbs/weather.png',
    //     description: 'This is a concept of a responsive website, which shows not only temperature numbers, but also suggests the actual clothing to wear (layer, rain coat, umbrella etc). Also this website is a place, where you can check and compare what to wear in different place. It could be really useful if you travel a lot.',
    //     groups: [WEB],
    //     attachments: [
    //         {
    //             image: 'images/weather/weather_mobile.gif'
    //         },
    //         {
    //            image: 'images/weather/weather_screens.png'
    //         }
    //     ]
    // };

    // var photo = {
    //     title: 'photography',
    //     id: 'photo',
    //     image: 'images/thumbs/photo.png',
    //     description: 'Here are my photos from different places around the world in the photo miniature style.',
    //     groups: [PHOTO],
    //     attachments: [
    //         {
    //             image: 'images/photos/alaska.jpg'
    //         },
    //         {
    //             image: 'images/photos/sun.jpg'
    //         },
    //         {
    //             image: 'images/photos/tilt2.jpg'
    //         },
    //         {
    //             image: 'images/photos/tilt_shift.jpg'
    //         },
    //         {
    //             image: 'images/photos/shift.jpg'
    //         }
    //     ]
    // };

    // var eggTimer = {
    //     title: 'egg timer',
    //     id: 'egg-timer',
    //     image: 'images/thumbs/egg5.png',
    //     description: 'Here’s a concept of a simple mobile app - egg timer. It’s easy and fun to use.',
    //     groups: [MOBILE],
    //     attachments: [
    //         {
    //             html: $sce.trustAsHtml('<img src="images/eggs/egg.png" style="max-width: 70%" />')
    //         }
    //     ]
    // };

    var works = [
        musicApp,
        gasStation,
        mittens,
        bankApp,
        foodVis,
        tipCalculator,
        //chewWell,
        //airHockey,
        musicVis,
        raceTheBunny, 
        beardMen,
        // origami,
        // videos,
        //hyperLoop,
        //weather,
        //photo,
        calendarApp
        //eggTimer
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