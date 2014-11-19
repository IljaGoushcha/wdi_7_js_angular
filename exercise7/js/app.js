angular.module('Ex7', [
    'ngRoute'
]);

angular.module('Ex7').run(function(TitleFactory, UserFactory, SkillFactory) {
    TitleFactory.fetch();
    UserFactory.fetch();
    SkillFactory.fetch();
});


angular.module('Ex7').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/users', {
            templateUrl: 'templates/users.html'
        })
        .when('/titles', {
            templateUrl: 'templates/titles.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


