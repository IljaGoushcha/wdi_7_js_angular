angular.module('Demo', []);

angular.module('Demo').directive('gaLorem', function() {

    var arrayOfReturns = [];

    return {
      restrict: 'EA',
      templateUrl: 'templates/lorem.html',
      // template: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
      scope: {
        repetitions: '@' // one way, outside in
      }
    };
});

angular.module('Demo').directive('gaIlja', function() {
    return {
        restrict: 'EA',

        templateUrl: 'templates/igpractice.html'

    };
});

angular.module('Demo').filter('range', function() {

    return function(param) {
        if (param) {
          return Array.apply(null, {length: param}).map(Number.call, Number);
        }
    };
});
