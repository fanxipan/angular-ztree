"use strict";

require([
    "lodash",
    "angular",
    "jQuery",
    "zTree",
    "angular-route",
    "views",
    "directives",
    "services",
    "decorators",
    "configs"
], function (_, angular) {
    var appName = "expApp",
        modules = _.drop(arguments, 4);
    
    angular.module(appName, modules);
    angular.bootstrap(document, [appName]);
});