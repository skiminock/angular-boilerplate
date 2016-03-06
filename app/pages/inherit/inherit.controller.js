(function () {
    angular.module("TestApp.inherit")
        .controller("InheritController", inheritController);

    inheritController.$inject = [];

    function inheritController() {

        var vm = this;
        activate();

        function activate(){            
            vm.title = "INHERIT";
        }
    };

})();
