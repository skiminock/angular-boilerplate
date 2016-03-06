(function () {

    angular.module("TestApp.inherit").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("inherit", {
            url: "/inherit",
            templateUrl: "app/pages/inherit/inherit.html",
            controller:'InheritController as ic'
        });

    };

})();
