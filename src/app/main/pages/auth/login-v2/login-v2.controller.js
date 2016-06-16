(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginV2Controller', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller($scope, api)
    {
        $scope.submitLoginForm = function () {
            var email=$scope.vm.form.email;
            var password=$scope.vm.form.password;
            console.log("EMAIL: "+email);
            console.log("PASSWORD: "+password);
            api.login.get({'email': email, 'password': password},

                // Success
                function (response) {
                    console.log(response);
                },

                // Error
                function (response) {
                    console.error(response);
                }
            );
        };

        // Data

        // Methods

        //////////
    }
})();