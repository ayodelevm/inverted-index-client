angular.module('IndexCtrl', []).controller('IndexController', function($scope, IndexService) {
  // holds the search query
  $scope.searchQuery = '';

  // holds the selected file
  $scope.files = '';

  // to handle search button click
  $scope.search = function() {

  };

  // to handle index creation
  $scope.createIndex = function() {
    // console.log($scope.files);
    IndexService.uploadAndCreateIndex($scope.files)
      .then(function(res) {
        console.log('the response========', res);
        $scope.filename = Object.keys(res.data.processedFiles);
        $scope.invertedIndex = res.data.processedFiles[$scope.filename];
        $scope.keys = Object.keys($scope.invertedIndex);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
});