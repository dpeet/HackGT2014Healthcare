var spaApp = angular.module('spaApp', ['ngRoute']);

	// configure our routes
	spaApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
	});

	// create the controller and inject Angular's $scope
	spaApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'BLAHHHHHHHHHHHHHHHHH';
	});