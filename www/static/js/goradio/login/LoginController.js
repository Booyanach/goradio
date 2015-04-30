(function(){
    function LoginController($scope, $location, LoginService) {
        var login = this;
        login.doLogin = function () {
            if (login.username && login.password) {
                LoginService.login(login.username, login.password);
            } else {
                console.log('ERROR Logging in');
            }
        };

        $scope.$watch(LoginService.getUser, function (newData) {
           if (newData) {
               $location.path('/dashboard');
           }
        });
    }
    goradio.app.controller('LoginController', LoginController);
})();