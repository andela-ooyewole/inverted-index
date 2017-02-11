const app = angular.module('myApp', ['ngMaterial']);
app.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
})
.controller('MyController', ['$scope', ($scope) => {
  $scope.query = '';

  $scope.search = () => {
    $scope.result = $scope.query;
  };
}]);
