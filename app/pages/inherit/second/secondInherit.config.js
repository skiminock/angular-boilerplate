(function () {

    angular.module("inherit.second").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("inherit.second", {
            url: "/second",
            templateUrl: "app/pages/inherit/second/secondInherit.html",
            controller:'SecondInheritController as sic'
        });

    };

})();
