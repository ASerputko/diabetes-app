import angular from 'angular';
import 'angular-ui-router';
import 'babel-polyfill';
import routesConfig from './config/routes.js';
import './modules/bread-units/bread-units.module.js';

angular
    .module('mlt', [
        'ui.router',

        'mlt.bread-units'
    ])
    .config(routesConfig);
