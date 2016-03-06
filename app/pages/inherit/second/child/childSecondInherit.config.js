(function () {

    angular.module("second.child").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("inherit.second.child", {
            url: "/child",
            templateUrl: "app/pages/inherit/second/child/childSecondInherit.html",
            controller:'ChildSecondInheritController as csic'
        });

    };

})();
