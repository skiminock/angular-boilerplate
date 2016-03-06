(function () {

    angular.module("abstract.concrete").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("abstract.concrete", {
                url: "/concrete",
                templateUrl: "app/pages/abstract/concrete/concreteAbstract.html",
                controller:'ConcreteAbstractController as cac'
        });

    };

})();
