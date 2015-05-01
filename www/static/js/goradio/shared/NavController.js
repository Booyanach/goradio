(function () {
    function NavController($location, $modal, UserService) {
        var nav = this;

        nav.open = false;

        nav.showLogin = function () {
            $modal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'login',
                size: 'sm'
            });
        };

        nav.isLoggedIn = function () {
            return UserService.getUser();
        };

        nav.logOut = function () {
            UserService.logout();
            $location.path('/');
        };
    }
    goradio.app.controller('NavController', NavController);
})();