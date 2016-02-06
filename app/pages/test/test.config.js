(function () {

    angular.module("TestApp.test").config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {

        $routeProvider.when('/test', {
            controller:'TestController as tc',
            templateUrl:'app/pages/test/test.html'
        });

    };

})();
