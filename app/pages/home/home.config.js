(function () {

    angular.module("TestApp.home").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("home", {
            url: "/",
            templateUrl: "app/pages/home/home.html",
            controller:'HomeController as hc'
        });

    };

})();
