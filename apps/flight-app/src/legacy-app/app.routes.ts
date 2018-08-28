import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';

export function appRoutes($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    template: '<home></home>'
  })

};



