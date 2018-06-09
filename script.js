angular.module('app', [])
  .controller('appCtrl', function($scope, $http) {
    $scope.toggleSwitch = true;
    $scope.greater = false;
    $scope.sortType = "name";

    $http.get('parks.json').then(function(data) {
      $scope.parkData = data.data.Parks;

      for (var p of data.data.Parks) {
        $scope.rowColor = p.color;
        var area = p.details.Area;
        var replaceStr = area.replace(',', '');
        $scope.condition =(parseInt(replaceStr.substr(0,5)) > 2000);
        // if (parseInt(replaceStr.substr(0, 5)) > 2000) {
        //   $scope.greater = true;
        // }
      }
    });
  });