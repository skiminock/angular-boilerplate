(function () {

    angular.module("TestApp")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

    };

})();
