(function(){
    function loginService($resource) {
        var call = $resource('/login', {}, {
                'post' : {
                    method: 'POST',
                    isArray: false
                }
            });

        return {
            login: function (username, password) {
                return call.post({
                    username: username,
                    password: password
                }).$promise;
            }
        };
    }
    goradio.app.service('loginService', loginService);
})();