'use strict'

angular.module 'angularJwtApp'
.service 'authService', 
  class AuthService
  	constructor: (@$http, @storage) -> @baseUrl = "http://localhost:9000"
  	login: (data, success, error) ->
  		url = baseUrl + '/login'
  		@$http.post url, data
				.success success
				.error error
			me: (success, error) ->
				console.log 'me'
			logout: ->
				console.log 'logout'