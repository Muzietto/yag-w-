(function() {

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karrma',
      'Livestrong'
    ];
    
    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
    
    $scope.removeFirst = function() {
      $scope.todos.splice(0, 1);
    };
    
    $scope.removeLast = function() {
      $scope.todos.splice($scope.todos.length - 1, 1);
    };
  });

}());