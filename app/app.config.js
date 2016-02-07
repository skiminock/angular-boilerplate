(function () {

    angular.module("TestApp").config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider.state("home", {
            url: "",
            templateUrl: "app/pages/home/home.html"
        });

        $urlRouterProvider.otherwise("/");

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

    };

})();
