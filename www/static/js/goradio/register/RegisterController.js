(function(){
    function RegisterController($scope, $location, UserService) {
        var register = this;
        register.createUser = function () {
            if (register.username && register.password && register.password === register.passwordCheck) {
                UserService.register({
                    username: register.username,
                    password: register.password,
                    bio: register.bio
                }).then(function () {
                    $location.path('/dashboard');
                });
            } else {
                console.log('ERROR Creating user.');
            }
        };

        $scope.$watch(UserService.getUser, function (newData) {
            if (newData) {
                $location.path('/dashboard');
            }
        });
    }
    goradio.app.controller('RegisterController', RegisterController);
})();