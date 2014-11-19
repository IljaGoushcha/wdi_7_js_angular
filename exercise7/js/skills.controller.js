angular.module('Ex7').controller('SkillsCtrl', function($scope, $http, SkillFactory) {
    'use strict';

    $scope.skills = SkillFactory.skills;

});
