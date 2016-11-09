angular.module("ListaTelefonica").controller("ListaTelefonicaController",
			function($scope, $filter, ContatoService, OperadoraService) {
				$scope.app = "Lista Telefonica";
				
				//Serviços
				var carregarContatos = function() {
					ContatoService.getContatos().success(function(data){
						$scope.contatos = data;
					}).error(function(data){
						$scope.message = "Não carregou contatos";
					});
				};
				
				var carregarOperadoras = function() {
					OperadoraService.getOperadora().success(function(data){
						$scope.operadoras  = data;
					}).error(function(data){
						$scope.message = "Não carregou operadoras";
					});
				};
				
				carregarContatos();
				carregarOperadoras();
				
				//Dados estaticos
				/* $scope.contatos = [
	                   {nome: $filter("uppercase")("Pedro"), data: new Date(), telefone: "999999999", cor: "yellow"},
	                   {nome: "Maria", data: new Date(),telefone: "999999913", cor: "blue"},
	                   {nome: "João", data: new Date(), telefone: "999999912", cor: "green"}
				 ];
				$scope.operadoras = [
				                   {nome: "Oi", telefone: "14", preco:"1", categoria:"Celular"},
				                   {nome: "Vivo", telefone: "15", preco:"2", categoria:"Celular"},
				                   {nome: "Tim", telefone: "41", preco:"3", categoria:"Celular"},
				                   {nome: "GVT", telefone: "41", preco:"4", categoria:"Fixo"},
				                   {nome: "Tim", telefone: "41", preco:"5", categoria:"Celular"},
							 ]; */
			
			$scope.adicionarContato = function(contato) {
			  ContatoService.setContatos(contato).success(function(data){
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContatos();
			  });
								 
				
			};		
			
			$scope.apagarContatos = function(contatos) {
				$scope.contatos = contatos.filter(function (contato) {
					if(!contato.selecionado) return contato;
				});
			};
			
			$scope.isContatoSelecionado = function(contatos) {
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};

			$scope.ordernarPorCampo = function(campo) {
				$scope.ordernacao = campo;
				$scope.direcao = !$scope.direcao;
			};
			
			$scope.classe="selecionado";
			
	});
