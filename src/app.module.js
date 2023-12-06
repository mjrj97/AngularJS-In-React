import angular from 'angular';

angular.module('app', []);

await import('@/app.controller');

export default (id) => {
  angular.element(function () {
    angular.bootstrap(document.getElementById(id), ['app'], {
      strictDi: true,
    });
  });
};
