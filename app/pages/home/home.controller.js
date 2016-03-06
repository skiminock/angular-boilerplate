(function () {
    angular.module("TestApp.home")
        .controller("HomeController", homeController);

    homeController.$inject = [];

    function homeController() {

        var vm = this;
        activate();

        function activate(){            
            vm.title = "HOME";
        }

    };

})();
