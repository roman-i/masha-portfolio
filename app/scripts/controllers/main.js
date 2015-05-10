'use strict';

/**
 * @ngdoc function
 * @name mashaPortfolioAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashaPortfolioAngularApp
 */
angular.module('mashaPortfolioAngularApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'portfolio', function ($scope, $timeout, portfolio) {

    $scope.portfolio = portfolio;

    $scope.onRender = function() {
        var $grid = $('#grid'),
              $sizer = $grid.find('.shuffle__sizer');

          $grid.shuffle({
            itemSelector: '.picture-item',
            sizer: $sizer
          });

          $(".filter-options button").click(function() {
            var grp = $(this).data("group");
            $grid.shuffle('shuffle', grp);
          }); 
    };
  }])
.directive('postRender', [ '$timeout', function($timeout) {
var def = {
    restrict : 'A', 
    terminal : true,
    transclude : true,
    link : function(scope, element, attrs) {
        $timeout(scope.onRender, 0);  //Calling a scoped method
    }
};
return def;
}]);
