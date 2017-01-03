angular.module("ListaTelefonica").directive("uiAccordions", function () {
	return {
		//Controller permite a construção de uma api capaz de manipular um componente.
		//Isso pode ser utíl para construir um componente mais complexo
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});

angular.module("ListaTelefonica").directive("uiAccordion", function(){
	return {
		templateUrl: "view/uiAccordionDirective.html",
		transclude: true,
		scope: {
			title : "@"
		},
		require: "^uiAccordions", //chama alguma api disponivel no pai de accordions
		link: function (scope, element, attrs, ctrl){ 
			ctrl.registerAccordion(scope);
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened= true;
			};
		}
	};
});