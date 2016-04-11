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
.controller('ResumeCtrl', ['$scope', 'resume',
    function ($scope, resume) {
        $scope.resume = resume;
    }
]);
