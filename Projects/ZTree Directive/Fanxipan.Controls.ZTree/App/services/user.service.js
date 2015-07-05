"use strict";

define(function () {
    return ["factory", "userService", [
        "$resource",
        function ($resource) {
            return $resource("/api/User",{
                id: "@userId",
            }, {
                setAdmin: {
                    method: "post",
                },
            });
        },
    ]];
});