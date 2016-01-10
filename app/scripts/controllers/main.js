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
  .controller('MainCtrl', ['$scope', '$timeout', 'portfolio', '$routeParams', '$location', '$route', function ($scope, $timeout, portfolio, $routeParams, $location, $route) {

  

    $scope.portfolio = portfolio;

          var lastRoute = $route.current;
          $scope.$on('$locationChangeSuccess', function(event) {
              //alert('route changed');
              var group = $route.current.params.groupId;
              if (group) {
                var $grid = $('#grid');
                $grid.shuffle('shuffle', group);
              }
              $route.current = lastRoute;
              
              // $grid.shuffle('shuffle', grp);
          });

    $scope.onRender = function() {
        
        var $grid = $('#grid'),
                $sizer = $grid.find('.shuffle__sizer');
          $grid.shuffle({
              itemSelector: '.picture-item',
              sizer: $sizer
          });

          //$state.transitionTo('search', {q: 'updated search term'}, { notify: false });

          // $('.filter-options a').click(function() {
          //   //var grp = $(this).data('group');
          //   // $location.search('group', grp);
          //   //$grid.shuffle('shuffle', grp);
          //   return true;
          // }); 

          // if ($routeParams && $routeParams.categoryId) {
          //   $grid.shuffle('shuffle', $routeParams.categoryId);
          // }

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
