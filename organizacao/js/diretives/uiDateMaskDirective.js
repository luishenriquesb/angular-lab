angular.module("ListaTelefonica").directive("uiDateMask", function(){
	return {
		require: "ngModel", // chama alguma api disponivel no modulo
		//crtl - retorna as apis requiridas
		//element - api para controlar dom 
		//attrs - atributos do elemento 
		link: function (scope, element, attrs, ctrl){
			
			//é chamado quando o acontece o envento definido no elemento
			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});
			

		var _formatDate = function(date) {
				date = date.replace(/[^0-9]+/g, "");
				if (date.length > 2) {
					date = date.substring(0, 2) + "/" + date.substring(2);
				}
				if (date.length > 5) {
					date = date.substring(0, 5) + "/" + date.substring(5, 9);
				}
				return date;
			};
			
	
		//Parses são adicionados ao model, são chamados antes do valor ser associado ao escopo 
			ctrl.$parsers.push(function(value) {
				if (value.length === 10) {
					var dateArray = value.split("/");
					console.log(dateArray);
					return new Date(dateArray[2], dateArray[1] - 1,
							dateArray[0]).getTime();
				}
		});
		
		//Formatters são adicionados ao model, são chamados antes do valor do model ser renderizado 
		ctrl.$formatters.push(function (value) {
			return $filter("date")(value, "dd/MM/yyyy");
		});
			
	}

	};
});