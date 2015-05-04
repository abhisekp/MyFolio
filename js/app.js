var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    template: ''
  }).when('/about-me', {
    templateUrl: 'templates/aboutme.html'
  }).when('/my-works', {
    templateUrl: 'templates/myworks.html'
  }).when('/services', {
    templateUrl: 'templates/services.html'
  }).when('/contact-me', {
    templateUrl: 'templates/contactme.html',
    controller: 'ContactCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);


app.controller('ContactCtrl', ['$scope', function ($scope) {
  $scope.contactInfo = {
    name: '',
    email: '',
    message: ''
  };

  $scope.submitForm = function () {
    console.log($scope.contactInfo);
  }
}]);
