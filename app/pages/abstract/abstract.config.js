(function () {

    angular.module("TestApp.abstract").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider) {

        $stateProvider.state("abstract", {
                url: "/abstract",
                template: "<ui-view></ui-view>",
                controller: "AbstractController as ac",
                abstract: true
        });

    };

})();
