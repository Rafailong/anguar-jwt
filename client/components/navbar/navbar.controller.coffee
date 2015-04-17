'use strict'

angular.module 'angularJwtApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
    {
    	title: 'Home',
    	link: '/'
  	},
  	{
  		title: 'Login'
  		link: '/login'
  	}
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()