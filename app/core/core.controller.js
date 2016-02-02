(function () {
    angular.module("TestApp.core")
        .controller("CoreController", coreController);

    coreController.$inject = ["$location"];

    function coreController($location) {
        var vm = this;
        vm.changeLocation = changeLocation;

        function changeLocation(){
            if ($location.path() == "/test"){
                $location.path("/");
            }else{
                $location.path("/test");
            }
        }        
    };
})();