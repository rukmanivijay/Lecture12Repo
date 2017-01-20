( function(){
  'use strict';

  angular.module('MsgApp',[])
    .controller('MsgController',MsgController)
    .filter('love',LoveFilter)
    .filter('truth',TruthFilter);

    MsgController.$inject = ['$scope','$filter','loveFilter','truthFilter'];

    function MsgController($scope,$filter,loveFilter,truthFilter)
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
      };
    }

    function TruthFilter(){
      return function(input,target,replace)
      {
        input = input || "";
        input = input.replace(target,replace);
        return input;
      };
    }











})();
