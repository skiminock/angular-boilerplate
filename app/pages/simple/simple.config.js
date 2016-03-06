(function () {

    angular.module("TestApp.simple").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("simple", {
            url: "/simple",
            templateUrl: "app/pages/simple/simple.html",
            controller:'SimpleController as sc'
        });

    };

})();
