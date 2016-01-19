'use strict';

/*global $ */

/**
 * @ngdoc function
 * @name mashaPortfolioAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashaPortfolioAngularApp
 */
angular.module('mashaPortfolioAngularApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'portfolio', '$routeParams', '$location', '$route', '$rootScope', function ($scope, $timeout, portfolio, $routeParams, $location, $route, $rootScope) {

    var $grid = $('#grid');  

    $scope.portfolio = portfolio;

    function shuffleAndUpdateGroup() {
        var group = $route.current.params.groupId || 'all';
        $scope.group = group;
        $grid.shuffle('shuffle', $scope.group);
        $rootScope.lastGroup = group;
    }

    var lastRoute = $route.current;
    $scope.$on('$locationChangeSuccess', function() {
      if (lastRoute.$$route.controller === $route.current.$$route.controller) {

        shuffleAndUpdateGroup();

        $route.current = lastRoute;
      }
    });

    $scope.onRender = function() {
      var $sizer = $grid.find('.shuffle__sizer');
      $grid.shuffle({
          itemSelector: '.picture-item',
          sizer: $sizer
      });

      shuffleAndUpdateGroup();
    };
  }])
.directive('postRender', [ '$timeout', function($timeout) {
var def = {
    restrict : 'A', 
    terminal : true,
    transclude : true,
    link : function(scope) {
        $timeout(scope.onRender, 0);  //Calling a scoped method
    }
};
return def;
}]);
