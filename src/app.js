angular.module('myApp', [])
.controller('MyController', ['$scope', ($scope) => {
  $scope.username = 'World';

  $scope.sayHello = () => {
    $scope.greeting = `Hello ${$scope.username}!`;
  };
}]);
