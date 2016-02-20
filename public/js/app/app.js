/*jslint node: true */
/*global angular */
'use strict';

angular
.module('app', ['ngRoute','ngResource'])
.constant('API_BASE', '/api')
.config(['$routeProvider','$locationProvider', '$resourceProvider', '$httpProvider', function($routeProvider,$locationProvider,$resourceProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    $routeProvider.otherwise({redirectTo: '/'});
}]);
