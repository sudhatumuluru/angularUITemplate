'use strict';

var auth = angular.module('rio.auth', ['ngMaterial']);

auth.controller('LoginCtrl', function($scope, $location, $mdDialog, $rootScope, $http) {
    var vm = this;
    vm.username = null;
    vm.password = null;

    vm.handleSubmit = handleSubmit;
    vm.handleCancel = handleCancel;
    vm.resetLoginForm = resetLoginForm;

    $rootScope.isAuthorized = false;

    function handleSubmit() {
        $http.get('/app/assets/config.json').then(function(response){
            var username = response.data.username;
            var password = response.data.password;
            if (vm.username === username && vm.password === password) {
                $rootScope.isAuthorized = true;
                $rootScope.globals.currentUser = "rio";
                $mdDialog.hide();
                $location.path('/home');
            }
        });
    }

    function handleCancel() {
        return $mdDialog.cancel();
    }

    function resetLoginForm() {
        vm.username = null;
        vm.password = null;
    }
});