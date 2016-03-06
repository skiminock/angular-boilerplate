(function () {

    angular.module("inherit.first").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("inherit.first", {
            url: "/first",
            templateUrl: "app/pages/inherit/first/firstInherit.html",
            controller:'FirstInheritController as fic'
        });

    };

})();
