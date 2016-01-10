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
  .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    var SAME_OBJECT = true;
    
    $scope.todos = todosInStore || [];
    
    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, SAME_OBJECT);
    
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
  }]);

})();