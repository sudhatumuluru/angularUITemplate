angular.module('relive.page2')
    .service('jobGroupService', ['$rootScope','$http','$q',
        function($rootScope, $http, $q) {
            var createJobGroupUrl = $rootScope.APIServerAddress + 'jobGroup';
            this.createJobGroup = function(jobGroup) {
                var defered = $q.defer();
                $http.post(createJobGroupUrl, jobGroup
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getJobGroupByGroupIDUrl = $rootScope.APIServerAddress + 'jobGroup/';
            this.getJobGroupByGroupID = function(jobGroupID) {
                console.log(jobGroupID);
                var defered = $q.defer();
                $http.get(getJobGroupByGroupIDUrl + jobGroupID
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getJobGroupsUrl = $rootScope.APIServerAddress + 'jobGroups';
            this.getGroups = function() {
                var defered = $q.defer();
                $http.get(getJobGroupsUrl
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var deleteJobGroupByGroupIDUrl = $rootScope.APIServerAddress + 'jobGroup/';
            this.deleteJobGroupByGroupID = function(jobGroupID) {
                console.log(jobGroupID);
                var defered = $q.defer();
                $http.delete(deleteJobGroupByGroupIDUrl + jobGroupID
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };
        }
    ]);
