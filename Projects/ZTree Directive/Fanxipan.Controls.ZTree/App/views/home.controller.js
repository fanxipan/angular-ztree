"use strict";

define(function () {
    return ["HomeController", [
        "$scope", "$http", "$resource", "$log", "$q",
        "Restangular",
        "listService", "userService",
        function (
            $scope, $http, $resource, $log, $q,
            Restangular,
            svList, svUser) {

            window.Restangular = Restangular;

            // $scope functions.
            $scope.sendJSONP = function () {
                $http.jsonp("https://api.github.com?callback=JSON_CALLBACK")
                    .success(function (data) {
                        console.log(data);
                    })
                    .error(function (error) {
                        console.error(error);
                    });
            };
            $scope.sendCORS = function () {
                $http.post("https://api.github.com")
                    .success(function (data) {
                        console.log(data);
                    })
                    .error(function (error) {
                        console.error(error);
                    });
            };
            $scope.test = function () {
                $q.when({ x: "hoho" })
                    .then(function (data) {
                        console.log(data);
                        //return { y: "hihi" };
                    })
                    .then(function (data) {
                        console.log(data);
                    });
            };
        }
    ]];
});