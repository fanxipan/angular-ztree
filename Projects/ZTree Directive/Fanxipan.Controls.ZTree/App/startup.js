"use strict";

require.config({
    paths: {
        "angular": "/Assets/bower_components/angular/angular",
        "angular-route": "/Assets/bower_components/angular-route/angular-route",
        "angular-resource": "/Assets/bower_components/angular-resource/angular-resource",
        "lodash": "/Assets/bower_components/lodash/lodash"
    },
    shim: {
        "angular": {
            exports: "angular"
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
        }
    },
    packages: ["views", "directives", "services", "decorators", "configs"],
    deps: ["app"]
});