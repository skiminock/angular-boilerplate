(function () {
    angular.module("inherit.second")
        .controller("SecondInheritController", secondInheritController);

    secondInheritController.$inject = [];

    function secondInheritController() {

        var vm = this;
        activate();

        function activate(){            
            vm.title = "SECOND";
        }
    };

})();
