(function () {

    angular.module("TestApp.common").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("common", {
            url: "/common",
            template: "<div>common<ui-view></ui-view></div>"
        })
        .state("common.azaza", {
            url: "/azaza",
            template: "<div>azaza</div>"
        });


    };

})();
