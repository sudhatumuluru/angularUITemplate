'use strict';

angular.module('rio.page1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  //$routeProvider.when('/group', {
  //  templateUrl: 'partials/groups/group.html',
  //  controller: 'GroupsCtrl'
  //});
}])

.controller('GroupsCtrl', [function($scope, searchGroupResultMockData) {
  //$scope.resource = searchGroupResultMockData.resource;
}]);