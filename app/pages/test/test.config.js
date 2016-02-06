(function () {

    angular.module("TestApp.test").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("test", {
            url: "/test",
            templateUrl: "app/pages/test/test.html",
            controller:'TestController as tc'
        });

    };

})();
