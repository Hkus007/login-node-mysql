app.controller ('homePage', function ($rootScope,$http,$scope,$timeout,$sce,$window,$location) {
  $scope.submitEnquiry = function(){
      alert($scope.name+'-----'+$scope.email+'----------'+$scope.message);
      $scope.dt = {};
      var url = '/enquiry';
      $scope.dt.name = $scope.name;
      $scope.dt.email = $scope.email;
      $scope.text = $scope.message;
      $http.post(url,$scope.dt).success( function(response) {
        console.log(response);
        alert('success');  
     });
  }
   
});