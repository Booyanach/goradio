(function(){
    function UserService($resource) {
        var UserService = this,
            call = function (path) {
                return $resource(path, {}, {
                    'post' : {
                        method: 'POST',
                        isArray: false
                    }
                });
            };

        UserService.login =function (data) {
            return call('/login').post(data).$promise.then(function (response) {
                UserService.user = response;
            });
        };

        UserService.getUser = function () {
            return UserService.user;
        };

        UserService.logout = function () {
            UserService.user = null;
        };

        UserService.register = function (data) {
            return call('/users').post(data).$promise;
        };

        UserService.isAuthenticated = function () {
            return typeof UserService.user !== 'undefined';
        };

        return UserService;
    }
    goradio.app.service('UserService', UserService);
})();