"use strict";

define(function () {
    return [["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/", {
                    controller: "HomeController",
                    templateUrl: "/App/views/home.html"
                })
                .otherwise("/");
        },
    ]];
});