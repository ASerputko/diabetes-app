import template from './bread-units.html';

routesConfig.$inject = ['$stateProvider'];
function routesConfig($stateProvider) {
    $stateProvider
        .state('bread-units', {
            url: '/bread-units',
            template: template(),
            controller: 'BreadUnitsListController as vm'
        });
};

export default routesConfig;
