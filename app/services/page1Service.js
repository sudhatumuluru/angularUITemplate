angular.module('relive.page1')
    .service('jobService', ['$rootScope','$http','$q',
        function($rootScope, $http, $q) {
            var createJobUrl = $rootScope.APIServerAddress + 'job';
            this.createJob = function(job) {
                var defered = $q.defer();
                $http.post(createJobUrl, job
                ).success(function(data){
                    defered.resolve(data.jobID);
                }).error(function(data, status){
                    console.error("Failed to create Job! Field: " + data.fields + ". Message: " + data.message);
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getJobByJobIDUrl = $rootScope.APIServerAddress + 'job/';
            this.getJobByJobID = function(jobID) {
                var defered = $q.defer();
                $http.get(getJobByJobIDUrl + jobID
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var deleteJobByJobIDUrl = $rootScope.APIServerAddress + 'job/';
            this.deleteJobByJobID = function(jobID) {
                var defered = $q.defer();
                $http.delete(deleteJobByJobIDUrl + jobID
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getSitesUrl = $rootScope.APIServerAddress + 'sites';
            this.getSites = function() {
                var defered = $q.defer();
                $http.get(getSitesUrl
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getReleasesUrl = $rootScope.APIServerAddress + 'releases';
            this.getReleases = function() {
                var defered = $q.defer();
                $http.get(getReleasesUrl
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getSATsUrl = $rootScope.APIServerAddress + 'sats';
            this.getSATs = function() {
                var defered = $q.defer();
                $http.get(getSATsUrl
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getTemplateUrl = $rootScope.APIServerAddress + 'template/1';
            this.getTemplate = function() {
                var defered = $q.defer();
                $http.get(getTemplateUrl
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };

            var getLogUrl = $rootScope.JobLogAddress;
            this.getLog = function(logID) {
                var defered = $q.defer();
                $http.get(getLogUrl + logID
                ).success(function(data){
                    defered.resolve(data);
                }).error(function(data, status){
                    defered.reject(data);
                });
                return defered.promise;
            };
        }
    ]);
