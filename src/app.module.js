import angular from 'angular';

angular.module('app', []).controller('HelloWorldCtrl', function ($scope) {
  $scope.message = 'Hello from Angular!';
});

angular.element(function() {
  angular.bootstrap(document.getElementById('angularApp'), ['app']);
});