var app = angular.module('myApp', []); 
app.controller('myCtrl', function($scope) {
  
  $scope.nextId = 1; 
  // the id makes sure there are no duplicate objects. 
  // when creating a new character, assign id to nextId
  // then increment nextId
  
  $scope.charList = [
    {
      "id" : 0, 
      "charName" : "", 
      "playerName" : "",
      "initiative" : "",
      "hp" : ""
    }
  ];

  $scope.add = function() {
    $scope.charList.push(
      {
        "id" : $scope.nextId, 
        "charName" : "", 
        "playerName" : "",
        "initiative" : "",
        "hp" : ""
      }
    );
    $scope.nextId ++;
  };

  $scope.moreHp = function(char) {
    char.hp ++;
  };
  $scope.lessHp = function(char) {
    char.hp --;
  };

  $scope.remove = function(item) { 
    var index=$scope.charList.indexOf(item);
    $scope.charList.splice(index,1);     
  };

  $scope.duplicate = function(item) { 
    
    $scope.newChar = 
      {
        "id" : $scope.nextId, 
        "charName" : item.charName, 
        "playerName" : item.playerName,
        "initiative" : item.initiative,
        "hp" : item.hp
      };
    
    $scope.nextId ++;
    
    $scope.charList.push($scope.newChar);    
  };
  
});