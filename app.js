var TicTacToeApp = angular.module('TicTacToeApp', []);



TicTacToeApp.controller('gameCtrl', function($scope) {
 
	// $scope.testString = "Angular source, App, and Controller present" ;

	$scope.board = ["", "", "",   "", "", "",   "", "", ""] ;



	$scope.isCellX = function(thisCell) {
	  return (thisCell == "X") ;
	};
	  

	$scope.isCellO = function(thisCell) {
	  return (thisCell == "O") ;
	};


	$scope.isCellBlank = function(thisCell) {	
	  return (thisCell == "O") ;
	};

	$scope.playerPicks = function(thisCell) {
	  return (thisCell = "X") ;
	  alert('hi');
	};

	$scope.alert = function(text) {
		alert(text);
	};

});