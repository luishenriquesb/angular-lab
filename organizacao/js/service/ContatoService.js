angular.module("ListaTelefonica").factory("ContatoService",
		function($http, config){
	var _getContatos = function() {
		return $http.get(config.baseUrl+"/contatos");
	};
	var _setContatos = function(contato) {
		return $http.post(config.baseUrl+"/contatos", contato);
	};
	
	return {
		getContatos : _getContatos,
		setContatos : _setContatos
	};
});