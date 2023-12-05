import angular from 'angular';

AppController.$inject = [
  '$scope',
];

function AppController($scope) {
  $scope.message = 'Hello from Angular!';
}

angular.module('app').controller('AppController', AppController);