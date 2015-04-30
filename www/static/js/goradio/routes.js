(function () {
    goradio.app.config(function ($stateProvider, $locationProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            })
            .state('index', {
                url: '/',
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('register', {
               url: '/register',
                templateUrl: 'views/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();