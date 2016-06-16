(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming, $scope, $sessionStorage)
    {
        var vm = this;
        $scope.$storage = $sessionStorage;


        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }
})();