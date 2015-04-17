'use strict'

angular.module 'angularJwtApp'
.controller 'LoginCtrl', ($scope, authService) ->
	$scope.signin = ->
  	console.log $scope.email
  	console.log $scope.password
	console.log authService.login
