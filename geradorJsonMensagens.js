
window.onload = function() {

	var arquivo = 'https://hitalosalucci.github.io/mensgensRecebidasBotTelegram/mensagensEnviadas.txt'; 

	var json = '';
	
	json += '{';

	json += lerArquivo(arquivo);

	json += '"vazio":"vazio" }';

	function lerArquivo(nome, callback)
	{
	    var req = new XMLHttpRequest();

	    req.onreadystatechange = function ()
	    {
	        if(req.readyState === 4)
	        {
	            //verifica se a requisição foi bem sucedida
	            if(req.status === 200 || req.status == 0)
	            {	
	            	valorArquivo = req.responseText;
	            	
	            	return valorArquivo;

	            }
	        }
	    }

	    req.open("GET", nome, false);

	    req.send(null);

    	return valorArquivo;

	    
	}

	console.log(json);

	// document.getElementById('jsonFormatado');

};