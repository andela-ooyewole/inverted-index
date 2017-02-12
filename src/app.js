const app = angular.module('myApp', ['ngMaterial']);
app.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
});
app.controller('MyController', ($scope) => {
  const index = new Index();
  $scope.query = '';
  $scope.selectedFile = '--select file--';
  $scope.storeFile = [];
  $scope.search = () => {
    $scope.result = $scope.query;
  };
  $scope.storeFile = () => {
    $scope.result = 'working';
    // index.selectedBooks.push();
  };
  $scope.upload = () => {
    document.getElementById('input').click();
  };
  $scope.file_changed = (element) => {
    $scope.$apply(() => {
      const file = element.files[0];
      $scope.result = file.name;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        // handle onload
        const fileDetails = e.target.result;
        const jsonFile = JSON.parse(fileDetails);
        $scope.contents = jsonFile;
        // $scope.result = file.name;
      };
    });
  };
});
