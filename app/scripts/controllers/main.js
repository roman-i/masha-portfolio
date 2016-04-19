'use strict';

/**
 * @ngdoc function
 * @name mashaPortfolioAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashaPortfolioAngularApp
 */
angular.module('mashaPortfolioAngularApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'portfolio', '$routeParams', '$location', '$route', function ($scope, $timeout, portfolio, $routeParams, $location, $route) {

    // var $grid = $('#grid');  

    portfolio.then(function(portfolioJson) {

      $scope.portfolio = portfolioJson;

      // function shuffleAndUpdateGroup() {
      //     var group = $route.current.params.groupId || 'all';
      //     $scope.group = group;
      //     $grid.shuffle('shuffle', $scope.group);
      //     $rootScope.lastGroup = group;
      // }

      // debugger;
      // var $sizer = $grid.find('.shuffle__sizer');
      // $grid.shuffle({
      //     itemSelector: '.picture-item',
      //     sizer: $sizer
      // });

    });

    var lastRoute = $route.current;
    $scope.$on('$locationChangeSuccess', function() {
      if (lastRoute.$$route.controller === $route.current.$$route.controller) {
        // shuffleAndUpdateGroup();

        $route.current = lastRoute;
      }
    });

    $scope.onRender = function() {
      // var $sizer = $grid.find('.shuffle__sizer');
      // $grid.shuffle({
      //     itemSelector: '.picture-item',
      //     sizer: $sizer
      // });
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
