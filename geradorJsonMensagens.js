window.onload = function() {
	var json = '';
	json += '{';

	json += lerArquivo();

	json += '"vazio":"vazio" }';


	function lerArquivo()
	{
		var arquivo = document.getElementById('mensagensEnviadas');

		console.log(arquivo);

		return arquivo.contentWindow.document.body.innerHTML;
	}
	// function fazerRequest(url){
	// // variável dados é um array de duas posições
	//   var dados = url;
	//   //uri é a url aonde farei a requisição
	//   var uri = dados[0];
	//   //callback é a função que será executada na volta da requisição
	//   var callback = dados[1];
	//   lerArquivo(uri, callback);
	// }

	// function lerArquivo(nome, callback)
	// {
	//     var req = new XMLHttpRequest();
	//     req.open("GET", nome, false);
	//     req.onreadystatechange = function ()
	//     {
	//         if(req.readyState === 4)
	//         {
	//             //verifica se a requisição foi bem sucedida
	//             if(req.status === 200 || req.status == 0)
	//             {
	//                 return req.responseText;
	//             }
	//         }
	//     }
	//     req.send(null);
	// }

	document.write(json);

};