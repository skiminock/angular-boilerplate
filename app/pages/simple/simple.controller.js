(function () {
    angular.module("TestApp.simple")
        .controller("SimpleController", simpleController);

    simpleController.$inject = ["helper", "TestService", "EVENTS", "ERROR_CODES"];

    function simpleController(helper, testService, EVENTS, ERROR_CODES) {

        var vm = this;
        activate();

        function activate(){

            //debugger;

            vm.title = "SIMPLE";

            vm.constants = {
                events: EVENTS,
                errorCodes: ERROR_CODES
            };

            vm.items = testService.getItems();

            testService.getItemsPromise().then(success).catch(error);
            function success(response){
                vm.itemsPromise = response;
            }
            function error(response){
                vm.error = response;
            }

            vm.testApi = testService.getSomeApi();

            vm.azaza = helper.toCamelCase("JustDoIt");
        }
    };

})();
