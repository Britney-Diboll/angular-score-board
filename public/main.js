angular 
  .module("scoreBoard", [])
  .controller("mainController", ($scope) =>{
   
    $scope.currentNameOne = " ";
    $scope.updateName = () => {
      $scope.currentNameOne = $scope.name;
    }

    $scope.currentScoreOne = 0;
    $scope.addOne = () => {
      $scope.currentScoreOne = $scope.currentScoreOne + 1;
    } 
    $scope.subOne = () => {
      $scope.currentScoreOne = $scope.currentScoreOne - 1;
    }

    $scope.currentNameTwo = " ";
    $scope.updateName2 = () => {
      $scope.currentNameTwo = $scope.name2;
    }

    $scope.currentScoreTwo = 0;
    $scope.addOne2 = () => {
      $scope.currentScoreTwo = $scope.currentScoreTwo + 1;
    } 
    $scope.subOne2 = () => {
      $scope.currentScoreTwo = $scope.currentScoreTwo - 1;
    }

  } 
)