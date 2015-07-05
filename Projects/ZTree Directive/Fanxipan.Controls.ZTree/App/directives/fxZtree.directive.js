"use strict";

define([
    "angular",
    "lodash",
    "jQuery"
], function (angular, _, $) {
    return ["fxZtree", [function () {
        return {
            templateUrl: "/App/directives/fxZtree.html",
            compile: function(element, attrs) {
                _.defer(function() {
                    var uls = element.find("ul");
                    $.fn.zTree.init(_.first(uls), null, null);
                });
            }
        };
    }]];
});