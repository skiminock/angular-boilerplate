(function () {
    angular.module("inherit.first")
        .controller("FirstInheritController", firstInheritController);

    firstInheritController.$inject = [];

    function firstInheritController() {

        var vm = this;
        activate();

        function activate(){            
            vm.title = "FIRST";
        }
    };

})();
