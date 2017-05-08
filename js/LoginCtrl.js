'use strict';

var auth = angular.module('rio.auth',['ngMaterial']);

auth.controller('LoginCtrl', function($scope, $location, $mdDialog, $rootScope, $http) {
    var vm = this;
    vm.username = null;
    vm.password = null;
    
    //$scope.username = null;
    //$scope.password = null;

    vm.handleSubmit = handleSubmit;
    vm.handleCancel = handleCancel;
    vm.resetLoginForm = resetLoginForm;

    $rootScope.isAuthorized = false;

   function handleSubmit() {
       var login = $rootScope.APIServerAddress + "accounts/login";
       var logindata = {"name": "root", "password": "video@Cloud" };
        console.log("going to login");
       console.log("login url:", login);
       console.log("logindata",logindata);
       var res = $http.post(login, logindata);
       
       //var res = $http.get(login);
       
       console.log("RES success: ", res);
       
       res.success(function(response){
            
            var username = response.data.username;
            var password = response.data.password;
            
            console.log("login successful");
            if (vm.username == username && vm.password == password) {
                $rootScope.isAuthorized = true;
                $rootScope.globals.currentUser = "root";
                $mdDialog.hide();
                $location.path('views/home.html');
            }
        });
       res.error(function(response){
           console.log("falied to post");
       });
    }

    function handleCancel() {
        return $mdDialog.cancel();
    }

    function resetLoginForm(){
        vm.username = null;
        vm.password = null;
    }
});