(function(){
    function LoginService($resource) {
        var LoginService = this,
            call = $resource('/login', {}, {
                'post' : {
                    method: 'POST',
                    isArray: false
                }
            });

        LoginService.login =function (username, password) {
            return call.post({
                username: username,
                password: password
            }).$promise.then(function (response) {
                LoginService.user = response;
            });
        };

        LoginService.getUser = function () {
            return LoginService.user;
        };

        LoginService.isAuthenticated = function () {
            return typeof LoginService.user !== 'undefined';
        };

        return LoginService;
    }
    goradio.app.service('LoginService', LoginService);
})();