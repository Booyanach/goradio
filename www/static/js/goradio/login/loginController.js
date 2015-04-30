(function(){
    function loginController(loginService) {
        console.log('loginController init');
        var login = this;

        login.doLogin = function () {
            if (login.username && login.password) {
                loginService.login(login.username, login.password).then(function (response) {
                    console.log(response);
                });
            } else {
                console.log('ERROR ERROR');
            }
        };
    }
    goradio.app.controller('loginController', loginController);
})();