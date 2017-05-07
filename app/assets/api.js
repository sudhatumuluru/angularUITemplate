var app = angular.module('rio');
app.constant("searchResultMockData", {
    resource : {
        "header": [
            { "jobID": "Job ID" },
            { "jobGroupID": "Job Group ID" },
            { "state": "PENDING", "siteID": "001", "siteName": "Site Name"},
            { "releaseVersion": "Release Version"},
            { "time": "Scheduled time" }
        ],
        "rows": [
            { "jobID": "1000000", "jobGroupID": "1001", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000001", "jobGroupID": "1001", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-001"},
            { "jobID": "1000002", "jobGroupID": "1001", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "INDetorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000003", "jobGroupID": "1001", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000004", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Denver", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000005", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Detorit" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000006", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000007", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000008", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000009", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000010", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000011", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000012", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000013", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000014", "jobGroupID": "1002", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000015", "jobGroupID": "1002", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000016", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000017", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000018", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000019", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000020", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000021", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000022", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000023", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000024", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000025", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000026", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000027", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000028", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000029", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000030", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000031", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000032", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000033", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000034", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000035", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000036", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000037", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000038", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000039", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000040", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000041", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000042", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000043", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000044", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000045", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000046", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000047", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000048", "jobGroupID": "1003", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000049", "jobGroupID": "1003", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000050", "jobGroupID": "1004", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000051", "jobGroupID": "1005", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Detorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000052", "jobGroupID": "1005", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000053", "jobGroupID": "1005", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "INDetorit", "releaseVersion": "1.0.6-002"},
            { "jobID": "1000054", "jobGroupID": "1006", "time": "2016-12-01 06:54:20.000", "state": "PENDING", "siteID": "001", "siteName": "Twincity" , "releaseVersion": "1.0.6-002"},
            { "jobID": "1000055", "jobGroupID": "1006", "time": "2016-12-01 06:53:19.752", "state": "PENDING", "siteID": "001", "siteName": "Denver", "releaseVersion": "1.0.6-002"}
        ]
    }
});

app.constant("searchGroupResultMockData", {
    resource : {
        "header": [
            { "groupID": "Group Id" },
            { "groupName": "Group Name" },
            { "jobIDs": "Job IDs" }
        ],
        "rows": [
            { "groupID": "1001", "groupName": "group1 ", "jobIDs": [1000000,1000001,1000002,1000003]},
            { "groupID": "1002", "groupName": "group2", "jobIDs": [1000004,1000005,1000006,1000007]},
            { "groupID": "1003", "groupName": "group3", "jobIDs": [1000016,1000017,1000018]},
            { "groupID": "1004", "groupName": "group4", "jobIDs": [1000050]},
            { "groupID": "1005", "groupName": "group5", "jobIDs": [1000051,1000052,1000053]},
            { "groupID": "1006", "groupName": "group6", "jobIDs": [1000054,1000055]}

        ]
    }
});

app.constant("JobTemplateMockData", {
    resource : {
        "templateID" : 1,
        "steps":[
            {   "time": "2016-12-01 06:53:19",
                "sites": [
                    {"siteID": "001", "name": "Detroit"},
                    {"siteID": "002", "name": "Twin Cities"},
                    {"siteID": "003", "name": "Houston"}
                ]
            }, {
                "time": "2016-12-01 06:53:19",
                "sites": [
                    {"siteID": "004", "name": "San Jose"},
                    {"siteID": "005", "name": "San Francisco"}
                ]
            }, {
                "time": "2016-12-01 06:53:19",
                "sites": [
                    {"siteID": "006", "name": "Kansas City"},
                    {"siteID": "007", "name": "Albuquerque"}
                ]
            }
        ]
    },
    resource2 : [
        { "jobID": "1000000", "jobGroupID": "1001", "time": "2016-12-01 06:53:19", "state": "PENDING", "siteID": "001", "siteName": "Detroit", "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000001", "jobGroupID": "1001", "time": "2016-12-01 06:54:20", "state": "PENDING", "siteID": "002", "siteName": "Twin Cities" , "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000002", "jobGroupID": "1001", "time": "2016-12-01 06:53:19", "state": "PENDING", "siteID": "003", "siteName": "Houston", "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000005", "jobGroupID": "1002", "time": "2016-12-01 06:54:20", "state": "PENDING", "siteID": "006", "siteName": "San Francisco" , "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000006", "jobGroupID": "1002", "time": "2016-12-01 06:53:19", "state": "PENDING", "siteID": "007", "siteName": "Kansas City", "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000007", "jobGroupID": "1002", "time": "2016-12-01 06:54:20", "state": "PENDING", "siteID": "008", "siteName": "Albuquerque" , "releaseVersion": "1.0.6-002", "meta": "meta"},
        { "jobID": "1000008", "jobGroupID": "1002", "time": "2016-12-01 06:54:20", "state": "PENDING", "siteID": "012", "siteName": "Seattle" , "releaseVersion": "1.0.6-002", "meta": "meta"}
    ]
});

