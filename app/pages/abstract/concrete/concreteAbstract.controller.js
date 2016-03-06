(function () {
    angular.module("abstract.concrete")
        .controller("ConcreteAbstractController", concreteAbstractController);

    concreteAbstractController.$inject = [];

    function concreteAbstractController() {
        var vm = this;
        activate();

        function activate(){            
            vm.title = "CONCRETE";
        }
    };
})();
