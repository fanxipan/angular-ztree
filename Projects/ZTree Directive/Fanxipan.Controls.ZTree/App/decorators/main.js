"use strict";

require.config({
    baseUrl: "/App/decorators",
});

define([
    "angular",
    "lodash"
    //"list.service.decorator",
], function (angular, _) {
    var moduleName = "app.decorators",
        module = angular.module(moduleName, []),
        decorators = _.drop(arguments, 2);

    module.config(["$provide", function ($provide) {
        _.each(decorators, function (value) {
            $provide.decorator.apply(null, value);
        });
    }]);

    return moduleName;
});