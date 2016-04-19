'use strict';

/**
 * @ngdoc function
 * @name mashaPortfolioAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashaPortfolioAngularApp
 */
angular
.module('mashaPortfolioAngularApp')
.controller('WorkCtrl', ['$scope', '$timeout', 'portfolio', '$routeParams',
    function ($scope, $timeout, portfolio, $routeParams) {
        portfolio.then(function(portfolioJson) {
            var workId = $routeParams.workId;
        
            var portfolioWork = portfolioJson.workById(workId);
            var next = portfolioJson.getNext(workId);
            var prev = portfolioJson.getPrev(workId);

            $scope.work = portfolioWork;
            $scope.next = next;
            $scope.prev = prev;
            $scope.portfolio = portfolioJson;            
        });
    }
]);
