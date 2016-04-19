'use strict';

angular
.module('mashaPortfolioAngularApp').
factory('portfolio', ['$http', '$q', '$location', function($http, $q, $location) {
    var deferred = $q.defer();
    var searchObject = $location.search();
    var code = searchObject.code || ''; 
    var url = 'http://marvladimirovna-1284.appspot.com/portfolio.json?callback=JSON_CALLBACK&code='+code;

    $http.jsonp(url).then(function(result) {
        var works = result.data;

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
            // categories: categories,
            workById: workById,
            getNext: getNext,
            getPrev: getPrev
        };
        deferred.resolve(portfolioPieces);
    });

    return deferred.promise;
}]);
