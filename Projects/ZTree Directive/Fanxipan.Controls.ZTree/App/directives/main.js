"use strict";

require.config({
    baseUrl: "/App/directives",
});

define([
    "angular",
    "lodash"
    //"displayText.directive",
    //"datepicker.directive",
], function (angular, _) {
    var moduleName = "app.directives",
        module = angular.module(moduleName, []),
        directives = _.drop(arguments, 2);

    _.each(directives, function (value) {
        module.directive.apply(null, value);
    });

    return moduleName;
});