angular.module("ListaTelefonica").filter(
		"nome",
		function() {
			return function(input) {
				var partesNome = input.split(" ");
				var nomeFormatado = partesNome.map(function(nome) {
					if (/(de|da)/.test(nome)) return nome;
						nome = nome.charAt(0).toUpperCase()
								+ nome.substring(1).toLowerCase();
					return nome;
				});
				return nomeFormatado.join(" ");
			};
		});
