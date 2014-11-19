angular.module('Exercise8', []);

// custom filter
angular.module('Exercise8').filter('rot13', function() {
    return function(param) {

        var rot13words = function(sentence) {
          var arrayOfWords = sentence.split(" ");
          var newArrayOfWords = arrayOfWords.map(function(word) {
            return rot13(word);
          });
          return newArrayOfWords.join(" ");
        };

        var rot13 = function(string) {
          var newString = string.split('').map(function(character) {
            return rotateLetter(character);
          });
          return newString.join('');
        };

        var rotateLetter = function(letter) {
          var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
          var letterIndex = alphabet.indexOf(letter);

          if (letterIndex < 12) {
            return alphabet[letterIndex + 13];
          } else {
            return alphabet[letterIndex - 13];
          }

        };

        if (param) {
          return rot13words(param);
        }
    };
});
