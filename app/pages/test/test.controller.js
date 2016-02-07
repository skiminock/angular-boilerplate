(function () {
    angular.module("TestApp.test")
        .controller("TestController", testController);

    testController.$inject = ["TestService"];

    function testController(testService) {

        var vm = this;

        activate();

        function activate(){
            
            vm.items = testService.getItems();
        }
    };

})();
