"use strict";

define([
    "lodash"
], function (_) {
    return ["listService", [
        "$delegate",
        function ($delegate) {
            return _($delegate).extend({
                custom: "hoho",
            });
        },
    ]];
});