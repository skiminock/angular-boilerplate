(function () {
    angular.module("blocks.services")
        .factory("TestService", testService);

    testService.$inject = ["$q", "apiList"];

    function testService($q, apiList) {

        var service = {
            getItems: getItems,
            getItemsPromise: getItemsPromise,
            getSomeApi: getSomeApi
        };

        var items = [
            { "text": "azaza",  "value": 1},
            { "text": "ololo",  "value": 2},
            { "text": "fuck",   "value": 3}
        ];

        return service;

        function getItems(){
            return items;
        }

        function getItemsPromise(){
            var deferred = $q.defer();
            deferred.resolve(items);
            //deffered.reject("error");
            return deferred.promise;
        }

        function getSomeApi(){        
            var some = {
                one: apiList.someOne,
                two: apiList.someTwo
            };
            return some;
        }

    };
})();
