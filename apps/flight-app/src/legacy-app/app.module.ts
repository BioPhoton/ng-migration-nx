import {module} from 'angular';
import * as angularMessages from 'angular-messages';
import * as angularUiRouter from 'angular-ui-router'

const ngMessages = angularMessages;
const uiRouter = angularUiRouter;

import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';

export const app = module('legacyApp', ['ngMessages', 'ui.router']);
app.config(appRoutes);
app.constant('baseURL', 'http://www.angular.at');
app.component('home', HomeComponent);
app.component('app', AppComponent);

