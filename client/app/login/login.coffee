'use strict'

angular.module 'angularJwtApp'
.config ($stateProvider) ->
  $stateProvider.state 'login',
    url: '/login'
    templateUrl: 'app/login/login.html'
    controller: 'LoginCtrl'
