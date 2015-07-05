"use strict";

define(function () {
    return ["provider", "listService", [
        "$httpProvider",
        function ($httpProvider) {
            var rootUrl = null;
            this.setRootUrl = function (url) {
                rootUrl = url;
            };
            this.$get = ["$http",
                function ($http) {
                    return {
                        url: rootUrl,
                    };
                }
            ];
        },
    ]];
});