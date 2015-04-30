(function () {
    function DashboardController() {
        var dashboard = this;
        console.log('dashboard init');

        dashboard.pageName = "Dashboard";

    }

    goradio.app.controller('DashboardController', DashboardController);
})();