import angular from 'angular';
import routes from './bread-units.routes.js';
import BreadUnitsListController from './bread-units.list.controller.js';

export default angular
    .module('mlt.bread-units', [
        'ui.router'
    ])
    .controller('BreadUnitsListController', BreadUnitsListController)
    .config(routes);
