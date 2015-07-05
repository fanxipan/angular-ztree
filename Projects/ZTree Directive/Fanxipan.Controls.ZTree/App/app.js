﻿"use strict";

require([
    "lodash",
    "angular",
    "angular-route",
    "angular-resource",
    "restangular",
    "views",
    "directives",
    "services",
    "decorators",
    "configs",
], function (_, angular) {
    var appName = "expApp",
        modules = _.drop(arguments, 2);
    
    angular.module(appName, modules);
    angular.bootstrap(document, [appName]);
});