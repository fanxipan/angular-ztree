"use strict";

require.config({
    baseUrl: "/App/views"
});

define([
    "angular",
    "lodash",
    "home.controller",
], function (angular, _) {
    var moduleName = "app.views",
        module = angular.module(moduleName, []),
        controllers = _.drop(arguments, 2);

    _.each(controllers, function (value) {
        module.controller.apply(null, value);
    });
    
    return moduleName;
});