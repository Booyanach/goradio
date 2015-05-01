(function () {
    function DashboardController($scope, UserService) {
        var dashboard = this;

        $scope.$watch(UserService.getUser,
        function (newVal) {
            if (newVal) {
                console.log(newVal);
                dashboard.user = newVal;
            }
        });

        dashboard.pageName = "Dashboard";

    }

    goradio.app.controller('DashboardController', DashboardController);
})();