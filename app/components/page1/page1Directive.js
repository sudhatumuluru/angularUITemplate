'use strict';

angular.module('relive.page1', [])

    .directive('jobSearch', ['jobService', '$rootScope', '$route',
        function(jobService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page1/templates/jobSearch.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobService,searchResultMockData) {
                    //TODO: $scope.sites = jobService.getSites();
                    $scope.sites = [{
                        siteID: 1,
                        name: 'Detroit'
                    }, {
                        siteID: 2,
                        name: 'Twincity'
                    }, {
                        siteID: 3,
                        name: 'Denver'
                    }, {
                        siteID: 4,
                        name: 'San Jose'
                    },{
                        siteID: 5,
                        name: 'Dallas'
                    },{
                        siteID: 6,
                        name: 'New York'
                    }];
                    $scope.selected = $scope.sites[0];
                    $scope.jobResource = searchResultMockData.resource;
                    $scope.hasSearchResult = false;
                    $scope.searchJob = function() {
                        var job = {};
                        job.jobID = $scope.jobID;
                        job.groupID = $scope.groupID;
                        job.minStart = $scope.minStart;
                        job.maxStart = $scope.maxStart;
                        job.status = $scope.selected;
                        var searchResult = jobService.searchJob(job);
                        if (searchResult != null) {
                            $scope.hasSearchResult = true;
                        }
                    };
                    $scope.resetSearchJobForm = function() {
                        $scope.jobID = "";
                        $scope.minStart = "";
                        $scope.maxStart = "";
                        $scope.groupID = "";
                        $scope.selected = $scope.items[0];
                        $scope.hasSearchResult = false;
                    };
                }
            }
        }
    ])
    .directive('jobCreate', ['jobService', '$rootScope', '$route',
        function(jobService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page1/templates/jobCreate.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobService) {
                    //TODO: $scope.sites = jobService.getSites();
                    $scope.sites = [{
                        siteID: 1,
                        name: 'Detroit'
                    }, {
                        siteID: 2,
                        name: 'Twincity'
                    }, {
                        siteID: 3,
                        name: 'Denver'
                    }, {
                        siteID: 4,
                        name: 'San Jose'
                    },{
                        siteID: 5,
                        name: 'Dallas'
                    },{
                        siteID: 6,
                        name: 'New York'
                    }];
                    //TODO: $scope.releases = jobService.getReleases();
                    $scope.releases = ['1.0.0', '1.0.1', '1.0.2', '1.0.3', '1.0.4', '1.0.5'];
                    $scope.createJob = function() {
                        if (!$scope.jobID) {
                            console.error("Job ID should NOT be empty!");
                            return;
                        }
                        if (!$scope.jobGroupID) {
                            console.error("Job group ID should NOT be empty!");
                            return;
                        }
                        if (!$scope.state) {
                            console.error("State should NOT be empty!");
                            return;
                        }
                        if (!$scope.selectedSite) {
                            console.error("Site should NOT be empty!");
                            alert("Site should NOT be empty!");
                            return;
                        }
                        if (!$scope.selectedReleaseV) {
                            console.error("Release version should NOT be empty!");
                            alert("Release version should NOT be empty!");
                            return;
                        }
                        if (!$scope.time) {
                            console.error("Schedule Time should NOT be empty!");
                            return;
                        }
                        if (!$scope.meta) {
                            console.error("Meta Time should NOT be empty!");
                            return;
                        }
                        var job = {};
                        job.jobID = $scope.jobID;
                        job.jobGroupID = $scope.jobGroupID;
                        job.state = $scope.state;
                        job.siteID = $scope.selectedSite.siteID;
                        job.siteName = $scope.selectedSite.name;
                        job.releaseVersion = $scope.selectedReleaseV;
                        job.time = $scope.time;
                        job.meta = $scope.meta;
                        console.log(job);
                        jobService.createJob(job);
                    };
                    $scope.resetCreateJobForm = function() {
                        $scope.jobID = "";
                        $scope.jobGroupID = "";
                        $scope.state = "";
                        $scope.siteID = "";
                        $scope.siteName = "";
                        $scope.time = "";
                        $scope.meta = "";
                    };
                }
            }
        }
    ])
    .directive('jobDelete', ['jobService', '$rootScope', '$route',
        function(jobService, $rootScope, $scope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                },
                templateUrl: 'app/components/page1/templates/jobDelete.html',
                link: function(scope, element, attrs, fn) {
                },
                controller: function($location, $scope, jobService) {
                    $scope.deleteJobByJobID = function(jobID) {
                        if (!jobID) {
                            console.error("Job ID should NOT be empty!");
                            return;
                        }
                        jobService.deleteJobByJobID(jobID);
                    };
                    $scope.resetDeleteJobForm = function() {
                        $scope.jobID = "";
                    };
                }
            }
        }
    ])
