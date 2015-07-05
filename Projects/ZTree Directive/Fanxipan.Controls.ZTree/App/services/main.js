"use strict";

require.config({
    baseUrl: "/App/services"
});

define([
    "angular",
    "lodash",
    "list.service",
    "user.service",
], function (angular, _) {
    var moduleName = "app.services",
        module = angular.module(moduleName, []),
        services = _.drop(arguments, 2);

    _.each(services, function (value) {
        var method = _.first(value),
            config = _.drop(value);
        module[method].apply(null, config);
    });

    return moduleName;
});