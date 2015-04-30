(function(){
    function LoginController($scope, $location, UserService) {
        var login = this;
        login.doLogin = function () {
            if (login.username && login.password) {
                UserService.login({
                    username: login.username,
                    password: login.password
                });
            } else {
                console.log('ERROR Logging in');
            }
        };

        login.goRegister = function ()  {
            $location.path('/register');
        };

        $scope.$watch(UserService.getUser, function (newData) {
           if (newData) {
               $location.path('/dashboard');
           }
        });
    }
    goradio.app.controller('LoginController', LoginController);
})();