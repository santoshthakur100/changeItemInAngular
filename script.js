// Code goes here
var angularTable = angular.module('MainApp', []);

angularTable.controller('MainCtrl', function($scope, $http) {
	$http.get("data.json").then(function(response) {
		 angular.forEach(response.data, function(Flighth) {
	        $scope.matrix = Flighth.airlineStop;
	        $scope.matrix2 = Flighth.airlineStop;
	     })
    });

});

angularTable.directive("owlCarousel", ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    transclude: false,
    link: function(scope, element) {

      scope.initCarousel = function(element) {
        var defaultOptions = {};
        var customOptions = scope.$eval($(element).attr('data-options'));
        for (var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }

        $(element).owlCarousel(defaultOptions);
      };

      scope.changeItem = function() {
        var car = $(element).data('owl.carousel');
        car && car.destroy();
        
        scope.matrix = scope.matrix2;

        $timeout(function() {
          scope.initCarousel(element);

        }, 0);

      };

      $timeout(function() {
        scope.initCarousel(element);
      
      }, 0);

    }
  };
}]);