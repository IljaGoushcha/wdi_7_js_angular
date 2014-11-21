angular.module('Demo', []);

angular.module('Demo').directive('gaClickable', function() {
    return {
        restrict: 'A',

        link: function($scope, element) {
            element.bind('click', function() {
                alert('Hello');
            });
        }
    };
});

angular.module('Demo').directive('gaHoverable', function() {
    return {
        restrict: 'A',

        link: function($scope, element) {
            element.bind('mouseover', function() {
              element.addClass('red');
            });
            element.bind('mouseout', function() {
              element.removeClass('red');
            });
        }

    };
});
