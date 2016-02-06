(function () {

    angular.module("TestApp").config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
              templateUrl:'app/pages/home/home.html',
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
