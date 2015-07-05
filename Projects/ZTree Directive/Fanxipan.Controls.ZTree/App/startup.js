"use strict";

require.config({
    paths: {
        "angular": "/Assets/bower_components/angular/angular",
        "angular-route": "/Assets/bower_components/angular-route/angular-route",
        "angular-resource": "/Assets/bower_components/angular-resource/angular-resource",
        "restangular": "/Assets/bower_components/restangular/dist/restangular",
        "jquery": "/Assets/bower_components/jquery/dist/jquery",
        "lodash": "/Assets/bower_components/lodash/lodash",
        //"underscore": "/Assets/bower_components/underscore/underscore",
    },
    shim: {
        "angular": {
            exports: "angular",
        },
        "angular-resource": {
            deps: ["angular"],
            init : function (angular) {
                return "ngResource";
            },
        },
        "angular-route": {
            deps: ["angular"],
            init : function (angular) {
                return "ngRoute";
            },
        },
        "restangular": {
            deps: ["angular", "lodash"],
            init: function (angular, lodash) {
                return "restangular";
            },
        },
    },
    packages: ["views", "directives", "services", "decorators", "configs"],
    waitSeconds: 10000,
    deps: ["app"],
});