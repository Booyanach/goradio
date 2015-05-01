(function(){
    function LoginController($scope, $modal, $location, $modalInstance, UserService) {
        var login = this;
        console.log(arguments);
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
            $modalInstance.close();
            $modal.open({
                templateUrl: 'views/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            });
        };

        $scope.$watch(UserService.getUser, function (newData) {
           if (newData) {
               $location.path('/dashboard');
               $modalInstance.close();
           }
        });
    }
    goradio.app.controller('LoginController', LoginController);
})();