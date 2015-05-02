(function () {
    goradio.app.config(function ($stateProvider, $locationProvider) {
        $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })
        .state('register', {
           url: '/register',
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
        .state('start', {
            url: '/',
            templateUrl: 'views/start.html',
            controller: 'StartController',
            controllerAs: 'start'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();