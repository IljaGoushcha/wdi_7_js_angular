describe('Exercise8', function() {
    'use strict';

    // mock the demo module
    beforeEach(angular.mock.module('Exercise8'));

    // test capitalize filter
    it('Encodes a string using ROT13', function() {
        inject(function(rot13Filter) {
            expect(rot13Filter('hello')).not.toBe('hello');
            expect(rot13Filter('hello')).toBe('uryyb');
            expect(rot13Filter('a')).toBe('n');
            expect(rot13Filter('n')).toBe('a');
        });
    });
});
