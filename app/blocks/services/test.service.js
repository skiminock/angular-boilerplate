(function () {
    angular.module("blocks.services")
        .factory("TestService", testService);

    testService.$inject = [];

    function testService() {
        
        var service = {
            getItems: getItems
        };
        
        return service;
        
        function getItems(){
            var items = [
                { "text": "azaza",  "value": 1},
                { "text": "ololo",  "value": 2},
                { "text": "fuck",   "value": 3},
            ];
            return items;
        }        
    };
})();