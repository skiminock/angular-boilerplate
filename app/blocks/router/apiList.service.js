(function () {
    angular.module("blocks.router")
        .factory("apiList", apiList);

    apiList.$inject = [];

    function apiList() {

        var prefix = "/api";

        //Some
        var somePrefix = prefix + "/some";
        var someOne = somePrefix + "/one";
        var someTwo = somePrefix + "/two";

        return {
            //Some
            someOne: someOne,
            someTwo: someTwo
        };
    };
})();
