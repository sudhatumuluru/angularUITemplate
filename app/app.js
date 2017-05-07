'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('relive', [
  'ngRoute',
  'ngCookies',
  'ngMaterial',
  'relive.page1',
  'relive.page2',
  'relive.version',
  'relive.auth',
  'demo',
  'ngTasty'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/page1', {
        templateUrl: 'app/partials/page1/page1.html'
      })
      .when('/page2', {
        templateUrl: 'app/partials/page2/page2.html'
      })
      .when('/login', {
          templateUrl: 'app/partials/auth/login.html'
      })
      .otherwise({redirectTo: '/login'});

}]).run(['$rootScope', '$http', 'envConfig', '$location', '$cookieStore', function($rootScope, $http, envConfig, $location, $cookieStore){
    //$rootScope.APIServerAddress = envConfig.APIAddress;
    console.log("Release server UI is ready!");

    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        console.log("Current user is not empty");
        //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/page1', '/page2']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/home');
        }
    });

    $http.get('/app/assets/config.json').then(function(response){
        $rootScope.APIServerAddress = "http://"+ response.data.apiHost + ":" + response.data.apiPort + "/v1/";
        console.log("Test Message -- API Address: " + $rootScope.APIServerAddress);
    });
}]);

app.controller('AppCtrl', function($scope, $location, $mdDialog, $rootScope) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };

    $scope.showAdvanced = function(event) {
        $mdDialog.show({
            controller: 'LoginCtrl',
            templateUrl: 'app/partials/auth/login-popup.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };
    $scope.signout = function(event) {
        $rootScope.isAuthorized = false;
        $location.path('/home');
    }
});
