const app = angular.module('myApp', ['ngMaterial']);
app.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
});
app.controller('MyController', ($scope, $mdDialog, $mdToast) => {
  const index = new Index();
  $scope.errorMessage = {
    title: '',
    content: ''
  };
  $scope.createIndexActive = false;
  $scope.fileContents = [];
  $scope.fileNames = [];
  $scope.noFilesIndexed = true;
  $scope.noFilesSelected = true;
  $scope.query = '';
  $scope.searchIndexActive = false;
  $scope.searchedIndexedFiles = {};
  $scope.selectedFileName = '--select file--';
  $scope.selectedIndexedFileName = '--All--';

  $scope.createIndex = () => {
    if ($scope.selectedFileName !== '--select file--') {
      $scope.createIndexActive = true;
      $scope.searchIndexActive = false;
    }
    if ($scope.selectedFileName !== '--select file--') {
      $scope.fileLocation = $scope.fileNames.indexOf($scope.selectedFileName);
      const fileContent = $scope.fileContents[$scope.fileLocation];
      index.createIndex($scope.selectedFileName, fileContent);
      $scope.words = Object.keys(index.getIndex($scope.selectedFileName));
      $scope.index = index.getIndex($scope.selectedFileName);
      $scope.noFilesIndexed = false;
    }
  };
  $scope.searchIndex = () => {
    if ($scope.selectedIndexedFileName === '--All--') {
      $scope.searchedIndexedFiles = index.searchIndex($scope.query);
    } else if (index.getIndex($scope.selectedIndexedFileName) !== undefined) {
      $scope.searchedIndexedFiles = index.searchIndex(
        $scope.selectedIndexedFileName, $scope.query
      );
    } else {
      return;
    }
    $scope.createIndexActive = false;
    $scope.searchIndexActive = true;
  };
  // display error messages
  $scope.showAlert = (ev) => {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($scope.errorMessage.title)
        .textContent($scope.errorMessage.content)
        .ariaLabel('Alert Dialog')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  // valid file uploaded alert
  $scope.showSuccessMessage = () => {
    $mdToast.show(
      $mdToast.simple()
        .textContent('File(s) uploaded!')
        .position('bottom right')
        .hideDelay(3000)
    );
  };
  // store uploaded files
  $scope.storeFiles = (element) => {
    $scope.noFilesSelected = false;
    $scope.$apply(() => {
      for (let i = 0; i < element.files.length; i += 1) {
        const file = element.files[i];
        const reader = new FileReader();
        if ($scope.fileNames.includes(file.name)) {
          $scope.errorMessage.title = 'File already added';
          $scope.errorMessage.content = 'Select a new file';
          $scope.showAlert();
        } else {
          reader.readAsText(file);
          reader.onload = (e) => {
            // handle onload
            const name = file.name;
            const fileContent = e.target.result;
            const content = JSON.parse(fileContent);
            const fileValidity = index.validateFile(content);
            if (fileValidity === 'Valid file') {
              $scope.fileContents.push(content);
              $scope.fileNames.push(name);
              $scope.showSuccessMessage();
            } else {
              $scope.errorMessage.title = fileValidity;
              $scope.errorMessage.content = `'${name}' is not 
                a valid JSON file.`;
              $scope.showAlert();
              $scope.noFilesSelected = $scope.fileContents.length === 0;
            }
          };
        }
      }
    });
  };
  // trigger file selection for input
  $scope.upload = () => {
    document.getElementById('input').click();
  };
});
