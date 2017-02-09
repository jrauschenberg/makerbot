
app.controller('HomeController', function ($scope, WordFactory, FrequencyFactory, SentimentFactory) {

  $scope.config = {
    extended: true
  };

  $scope.name = {};
  $scope.name = 'Hello, no one.';
  $scope.namefield = '';
  $scope.numTimesNameAdded = 0;
  $scope.hideInput = false;

  $scope.addName = function(name) {
    $scope.namefield = '';
    if (!sessionStorage.name) {
      sessionStorage.name = name;
    } else {
      sessionStorage.name += " " + name;
    }
    $scope.name = 'Hello, ' + sessionStorage.name + ".";
    $scope.numTimesNameAdded ++;
    if ($scope.numTimesNameAdded > 1) {
      $scope.hideInput = true;
    }
  };

  $scope.goBack = function() {
    $scope.hideInput = false;
    $scope.numTimesNameAdded = 0;
  };

});


