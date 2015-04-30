(function () {
    goradio.app.config(function ($stateProvider) {
        $stateProvider
            .state('welcome', {
                url: '/dashboard',
                data: {
                    requireLogin: true
                }
            })
            .state('login', {
                url: '/',
                data: {
                    requireLogin: false
                }
            })
    });
})();