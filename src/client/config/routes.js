routesConfig.$inject = ['$urlRouterProvider'];
function routesConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/bread-units');
};

export default routesConfig;
