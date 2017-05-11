angular.module('IndexSvc', ['ngFileUpload']).service('IndexService', ['$http', 'Upload', function($http, Upload) {
  return {
    uploadAndCreateIndex: function(filepath) {
      if(filepath && filepath.length) {
          console.log(filepath)
          return Upload.upload({
                url: 'http://localhost:3002/api/create',
                arrayKey: '',
                data: {
                    allFiles: filepath
                }
            })
      }
    },

    search: function(fileName, terms) {
      return $http.post('http://localhost:3002/api/search', {
        searchTerms: terms,
        filename: fileName
      });
    }
  }
}]);