(function () {
    angular.module("TestApp.core")
        .controller("BaseController", baseController);

    baseController.$inject = ["$state"];

    function baseController($state) {

        var vm = this;
        activate();

        function activate(){
            vm.currentState = $state.current;
            vm.allStates = _.filter($state.get(), function(item){
                return item.name && !item.abstract;
            });
        }

    };
})();
