(function(){
    function RegisterController($modal, $scope, $location, $modalInstance, UserService) {
        var register = this;
        register.createUser = function () {
            if (register.username && register.password && register.password === register.passwordCheck) {
                UserService.register({
                    username: register.username,
                    password: register.password,
                    bio: register.bio
                }).then(function (response) {
                    console.log(response);
                    $location.path('/dashboard');
                });
            } else {
                console.log('ERROR Creating user.');
            }
        };

        register.goLogin = function ()  {
            $modalInstance.close();
            $modal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
        };

        $scope.$watch(UserService.getUser, function (newData) {
            if (newData) {
                $location.path('/dashboard');
                $modalInstance.close();
            }
        });
    }
    goradio.app.controller('RegisterController', RegisterController);
})();