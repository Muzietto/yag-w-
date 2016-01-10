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
  });

}());