(function () {
    
    angular.module("TestApp").config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
              templateUrl:'app/pages/home/home.html',
            })
            .when('/test', {
              controller:'TestController as tc',
              templateUrl:'app/pages/test/test.html'
            })
            .otherwise({
              redirectTo:'/'
            });     
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
    };
    
})();
