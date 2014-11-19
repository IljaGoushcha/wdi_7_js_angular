angular.module('Ex7').controller('UsersCtrl', function($scope, $http, TitleFactory, UserFactory, SkillFactory) {
    'use strict';

    $scope.titles = TitleFactory.titles;
    $scope.users = UserFactory.users;
    $scope.availableSkills = SkillFactory.skills;
    $scope.arrayOfChecks = [];
    var arrayOfUsers = UserFactory.users;

    // $http.get('http://localhost:3000/users').success(function(response) {
    //     $scope.users = response;
    //     arrayOfUsers = response;
    // });

    $scope.addAndUpdateUser = function(user) {
      var params = {user: {
                            first_name: user.first_name,
                            last_name: user.last_name,
                            title_id: user.title_id
      }};

      if (user.id) {
        $http.put('http://localhost:3000/users/' + user.id, params)
        .success(function(data, status, headers, config) {
          $scope.users = UserFactory.fetch();
          var index = arrayOfUsers.indexOf(user)
          arrayOfUsers.splice(index, 1);
          arrayOfUsers.splice(index, 0, params.user);
          $scope.users = arrayOfUsers;
          $scope.user = {}; // $('#skill').val("");
          console.log(status);
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });
        // @scope.user = response:
      } else {
        $http.post('http://localhost:3000/users', params)
        .success(function(data, status, headers, config) {
          $scope.users = UserFactory.fetch();
          arrayOfUsers.push(data);
          $scope.users = arrayOfUsers;
          $scope.user = {};
          console.log(data);
        })
        .error(function(data, status, headers, config) {
          console.log(status);
        });
      }
      $scope.user = {};
    };

    $scope.deleteUser = function(user) {
      var params = {user: user};

      $http.delete('http://localhost:3000/users/' + user.id, params)
      .success(function(data, status, headers, config) {
        var index = arrayOfUsers.indexOf(user)
        arrayOfUsers.splice(index, 1);
        $scope.users = arrayOfUsers;
        console.log(status);
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });
    };

    $scope.upsertUser = function(user) {
      $scope.user = user;

      for (var i = 0; i < $scope.availableSkills.length; i++) {
        $scope['check' + $scope.availableSkills[i]["id"]] = false;
      }

      for (var i = 0; i < user.skills.length; i++) {
        for (var n = 0; n < $scope.availableSkills.length; n++) {
          if (user.skills[i]["id"] === $scope.availableSkills[n]["id"]) {
            $scope['check' + user.skills[i]["id"]] = true;
            $scope.arrayOfChecks.push($scope['check' + user.skills[i]["id"]]);
            console.log(check1);
          };
        }
      }
      console.log($scope.arrayOfChecks);

    };

});

// to dynamically create a variable $scope['check' + i]

// <div class="checkbox" ng-repeat="skill in skills">
//             <label><input type="checkbox" value="">{{skill.name}}</label>
//           </div>

// if (user.skills[i]["id"] === 2) {$scope.check2 = true};
//         if (user.skills[i]["id"] === 3) {$scope.check3 = true};
//         if (user.skills[i]["id"] === 4) {$scope.check4 = true};
