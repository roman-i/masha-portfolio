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
.controller('WorkCtrl', ['$scope', '$timeout', 'portfolio', '$routeParams', '$rootScope',
    function ($scope, $timeout, portfolio, $routeParams, $rootScope) {

        var workId = $routeParams.workId;
    
        var portfolioWork = portfolio.workById(workId);
        var next = portfolio.getNext(workId);
        var prev = portfolio.getPrev(workId);

        $scope.work = portfolioWork;
        $scope.next = next;
        $scope.prev = prev;
        $scope.lastGroup = $rootScope.lastGroup;

    }
]);
