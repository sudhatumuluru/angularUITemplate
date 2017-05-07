'use strict';

angular.module('relive.page2', [])

    .directive('jobGroupSearch', ['jobGroupService', '$rootScope', '$route',
        function(jobGroupService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page2/templates/jobGroupSearch.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobGroupService, searchGroupResultMockData) {
                    $scope.JobGroupResource = searchGroupResultMockData.resource; // TODO: Remove MockData
                    console.log("-----------------");
                    console.log($scope.JobGroupResource);
                    $scope.hasSearchResult = false;
                    $scope.searchJobGroup = function() {
                        var group = {};
                        group.groupID = $scope.groupID;
                        group.groupName = $scope.groupName;
                        var searchResult = jobGroupService.searchJobGroup(group);
                        if (searchResult != null) {
                            $scope.hasSearchResult = true;
                            $scope.JobGroupResource = searchResult;
                        }
                    };
                    $scope.resetSearchJobGroupForm = function() {
                        $scope.groupID = "";
                        $scope.groupName = "";
                    };
                }
            }
        }
    ])
    .directive('jobGroupCreate', ['jobGroupService', '$rootScope', '$route',
        function(jobGroupService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page2/templates/jobGroupCreate.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobGroupService) {
                    $scope.createJobGroup = function() {
                        var group = {};
                        group.groupID = $scope.groupID;
                        group.groupName = $scope.groupName;
                        jobGroupService.createJobGroup(group);
                    };
                    $scope.resetCreateJobGroupForm = function() {
                        $scope.groupID = "";
                        $scope.groupName = "";
                        $scope.jobIDs = [];
                    };
                }
            }
        }
    ])
    .directive('jobGroupDelete', ['jobGroupService', '$rootScope', '$route',
        function(jobGroupService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page2/templates/jobGroupDelete.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobGroupService) {
                    $scope.deleteJobGroupByGroupID = function(groupID) {
                        if (!groupID) {
                            console.error("Job Group ID should NOT be empty!");
                            return;
                        }
                        jobGroupService.deleteJobGroupByGroupID(groupID);
                    };
                    $scope.resetDeleteJobGroupForm = function() {
                        $scope.groupID = "";
                    };
                }
            }
        }
    ]);
