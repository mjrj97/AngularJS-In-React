import angular from 'angular';

angular.module('app', []);

import('./app.controller');

export function mountAngular(id) {
  angular.element(document.getElementById(id)).ready(function () {
    angular.bootstrap(document.getElementById(id), ['app'], {
      strictDi: true,
    });
  });
}
