"use strict";

require.config({
    baseUrl: "/App/configs",
});

define([
    "angular",
    "lodash",
    "route.config"
], function (angular, _) {
    var moduleName = "app.configs",
        module = angular.module(moduleName, []),
        configs = _.drop(arguments, 2);

    _.each(configs, function (value) {
        module.config.apply(null, value);
    });

    return moduleName;
});