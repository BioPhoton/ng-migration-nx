import { Component, ElementRef, Injector } from '@angular/core';
import {
  setAngularJSGlobal,
  UpgradeComponent,
  downgradeComponent,
  UpgradeModule
} from '@angular/upgrade/static';

import * as angular from 'angular'; // replace with const angular = (<any>window).angular; if Angular is available globally

// import 'legacyApp';
import {app} from './app/legacy-app/app';
const legacyApp = app;

if (!angular.module('legacyApp')) {
  throw new Error('"legacyApp" is not loaded');
}

// all components downgraded from Angular to AngularJS go here
import { AppComponent } from './app/app.component';
angular
  .module('downgraded', [])
  .directive('appRoot', downgradeComponent({ component: AppComponent }));

export const upgradedComponents = [];

// additional configuration invoked right before bootstrap
export function configureLegacyApp(i: Injector) {
  setAngularJSGlobal(angular);
  //  Insert additional configuration here
}
