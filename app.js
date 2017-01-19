( function(){
  'use strict';

  angular.module('MsgApp',[])
    .controller('MsgController',MsgController)
    .filter('love',LoveFilter);

    MsgController.$inject = ['$scope','$filter','loveFilter'];

    function MsgController($scope,$filter,loveFilter)
    {
      $scope.name = "Rukmani";
      $scope.stateOfBeing = "Hungry";
      $scope.cookieCost = 50;

      $scope.sayMessage = function(){
        var message = "I really like to eat";
        var upperCase = $filter('uppercase')(message);

        return upperCase;
      };

      $scope.sayLovesMessage = function(){
        var message = "I really likes to dance";
        message = loveFilter(message);
        return message;
      };

      $scope.feedRukmani = function(){
        return "feed me";
      };
    }

    function LoveFilter(){
      return function(input){
        input = input || "";
        input = input.replace("likes","loves");
        return input;
      }
    }
})();
