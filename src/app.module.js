import angular from 'angular';

angular.module('app', []);

await import('@/app.controller');

angular.element(function () {
  angular.bootstrap(document.getElementById('angularApp'), ['app'], {
    strictDi: true,
  });
});
