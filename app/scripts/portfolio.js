'use strict';

angular
.module('mashaPortfolioAngularApp').
factory('portfolio', function() {
    var pl = 'http://placehold.it/500x500';

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
        image: "images/thumbs/bunny.png",
        groups: [WEB, MOBILE],
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        attachments: [
            {
                image: "images/bunny/screens.png"
            },
            {
                image: "images/bunny/race_the_bunny.png"
            },
            {
                image: "images/bunny/last_screen.png"
            }
        ]
    };

    var chewWell = {
        title: 'chew well',
        id: 'chew-well',
        image: "images/thumbs/chew.png",
        groups: [MOBILE]
    };

    var airHockey = {
        title: 'air hockey',
        id: 'air-hockey',
        image: "images/thumbs/airhockey.png",
        groups: [MOBILE]
    };

    var foodVis = {
        title: 'food visualization',
        id: 'food-visualization',
        image: "images/thumbs/food.png",
        groups: [DATA_VIS]
    };

    var musicVis = {
        title: 'music visualization',
        id: 'music-visualization',
        image: "images/thumbs/music.png",
        groups: [DATA_VIS]
    };

    var hyperLoop = {
        title: 'hyper loop',
        id: 'hyper-loop',
        image: "images/thumbs/hyper.png",
        groups: [WEB]
    };

    var beardMen = {
        title: '8-bit beard men',
        id: '8-bit-beard-men',
        image: "images/thumbs/beards.png",
        groups: [ILLUSTRATION]
    };

    var origami = {
        title: 'origami illustrations',
        id: 'origami-illustrations',
        image: "images/thumbs/origami.png",
        groups: [ILLUSTRATION]
    };

    var mixBit = {
        title: 'mix bit videos',
        id: 'mix-bit-videos',
        image: pl,
        groups: [VIDEO]
    };

    var fireMan = {
        title: 'meet fireman video',
        id: 'meet-fireman-video',
        image: pl,
        groups: [VIDEO]
    };

    var ballet = {
        title: 'ballet video',
        id: 'ballet-video',
        image: pl,
        groups: [VIDEO]
    };

    var works = [
        raceTheBunny, 
        foodVis,
        chewWell,
        airHockey,
        musicVis,
        beardMen,
        origami,
        mixBit,
        hyperLoop,
        fireMan,
        ballet
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