const app = angular.module('myApp', ['ngMaterial']);
app.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
});
app.controller('MyController', ($scope, $mdDialog) => {
  const index = new Index();
  $scope.errorMessage = {
    title: '',
    content: ''
  };
  $scope.fileNames = [];
  $scope.indexedFiles = {};
  $scope.noFilesSelected = true;
  $scope.query = '';
  $scope.selectedFile = '--select file--';
  $scope.storedFiles = [];


  $scope.createIndex = () => {
    if ($scope.fileNames.length > 0) {
      const fileIndex = $scope.fileNames.indexOf($scope.selectedFile);
      const fileName = $scope.storedFiles[fileIndex].name;
      const fileContent = $scope.storedFiles[fileIndex].content;
      index.createIndex(fileName, fileContent);
      $scope.indexedFiles = index.indexedFiles;
      $scope.keys = Object.keys($scope.indexedFiles[$scope.selectedFile]);
      $scope.index = $scope.indexedFiles[$scope.selectedFile];
    }
  };
  $scope.search = () => {
    $scope.result = $scope.query;
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
              const fileInformation = {
                name,
                content
              };
              $scope.storedFiles.push(fileInformation);
              $scope.fileNames.push(name);
            } else {
              $scope.errorMessage.title = fileValidity;
              $scope.errorMessage.content = `'${name}' is not 
                a valid JSON file.`;
              $scope.showAlert();
              $scope.noFilesSelected = $scope.storedFiles.length === 0;
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
