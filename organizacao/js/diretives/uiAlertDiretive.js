angular.module("ListaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "view/uiAlertDirective.html",
		restrict: "AE",
		replace: true,
		//por padrão o scope da directiva é o mesmo do ambiente que chama ele.
		scope: {
			titulo: "@", //recupera o valor do atributo passado para a diretiva 
			message: "=" // Faz o two way data bind com atributo passado pela diretiva
		},
		transclude: true //permiti encapsular conteudo na tag da diretiva
	};
});