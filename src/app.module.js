import angular from 'angular';

export async function prepareAngular() {
  angular.module('app', []);

  await import('@/app.controller');
}

export function mountAngular(id) {
  angular.element(function () {
    angular.bootstrap(document.getElementById(id), ['app'], {
      strictDi: true,
    });
  });
}
