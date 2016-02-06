(function () {
    angular.module("TestApp.core")
        .controller("CoreController", coreController);

    coreController.$inject = ["$state"];

    function coreController($state) {
        var vm = this;
        vm.changeLocation = changeLocation;

        function changeLocation(){

            if ($state.current.name == "test"){
                $state.go("home");
            }else{
                $state.go("test");
            }
        }
    };
})();
