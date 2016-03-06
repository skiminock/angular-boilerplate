(function () {
    angular.module("TestApp.abstract")
        .controller("AbstractController", abstractController);

    abstractController.$inject = [];

    function abstractController() {

        var vm = this;
        activate();

        function activate(){            
            vm.title = "ABSTRACT";
        }
    };

})();
