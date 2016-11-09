angular.module("ListaTelefonica").service("OperadoraService", 
		function($http, config){
	this.getOperadora = function() {
		return $http.get(config.baseUrl+"/operadoras");
	};
	
});