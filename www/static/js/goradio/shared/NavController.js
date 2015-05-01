(function () {
    function NavController($location, $modal, UserService) {
        var nav = this;

        nav.open = false;

        nav.showLogin = function () {
            $modal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
        };

        nav.isLoggedIn = function () {
            return UserService.getUser();
        };

        nav.logOut = function () {
            UserService.logout();
            $location.path('/');
        };

        nav.toggleSidebar = function () {
            nav.open = !nav.open;
            console.log(nav.open);
        };
    }
    goradio.app.controller('NavController', NavController);
})();