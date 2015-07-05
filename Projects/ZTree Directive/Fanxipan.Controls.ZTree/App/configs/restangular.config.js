"use strict";

define(function () {
    return [["RestangularProvider",
        function (RestangularProvider) {
            RestangularProvider.setBaseUrl("/api");
        },
    ]];
});
