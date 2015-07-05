"use strict";

require.config({
    paths: {
        "angular": "/Assets/bower_components/angular/angular",
        "angular-route": "/Assets/bower_components/angular-route/angular-route",
        "angular-resource": "/Assets/bower_components/angular-resource/angular-resource",
        "lodash": "/Assets/bower_components/lodash/lodash",
        "jQuery": "/Assets/bower_components/jquery/dist/jquery.min",
        "zTree": "/Scripts/zTree/jquery.ztree.all-3.5"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "jQuery": {
            exports: "jQuery"
        },
        "angular-resource": {
            deps: ["angular"],
            init : function (angular) {
                return "ngResource";
            }
        },
        "angular-route": {
            deps: ["angular"],
            init : function (angular) {
                return "ngRoute";
            }
        },
        "zTree": ["jQuery"]
    },
    packages: ["views", "directives", "services", "decorators", "configs"],
    deps: ["app"]
});