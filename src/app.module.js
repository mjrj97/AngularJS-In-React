import angular from 'angular';

angular.module('app', []).controller('HelloWorldCtrl', function ($scope) {
  $scope.message = 'Hello from Angular!';
});