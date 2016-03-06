(function () {
    angular.module("second.child")
        .controller("ChildSecondInheritController", childSecondInheritController);

    childSecondInheritController.$inject = [];

    function childSecondInheritController() {

        var vm = this;
        activate();

        function activate(){
            
            vm.title = "CHILD";
        }
    };

})();
