'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(4);
  });
  
  it('should add items to the list', function () {
  scope.todo = 'Test 1';
  scope.addTodo();
  expect(scope.todos.length).toBe(5);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 12';
    scope.addTodo();
    scope.removeTodo(6);
    expect(scope.todos.length).toBe(5);
  });
});
