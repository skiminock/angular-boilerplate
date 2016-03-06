(function () {
    angular.module("TestApp.core")
        .controller("CoreController", coreController);

    coreController.$inject = ["$controller"];

    function coreController($controller) {

        var vm = this;
        activate();

        function activate(){
            angular.extend(vm, $controller('BaseController', {}));
        }

    };
})();
