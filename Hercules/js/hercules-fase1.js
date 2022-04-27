
function botaoJogar(){
    var escolha = prompt("Digite sua escolha: 1 ou 2")
    
    while (true) {
       
    if (escolha == 1){
        
      mudarPagina(escolha);
      break;
        
    }else if ( escolha ==2){
      alert("Hercules se esconde atrás de rochas e pensa em estratégias de ataque enquanto espera anoitecer.")
      mudarPagina(escolha);
      break;
      
    }else{

      alert('Decisão inválida. Digite 1 ou 2');
      escolha = prompt('Digite o número da decisao que deseja tomar');
     
    } 
}
}

function mudarPagina(escolha) {

    if (escolha == 1) {
      window.location.assign("hercules-fase1-gameover.html");
    } else {
      window.location.assign("hercules-fase2.html");
      
    }
  } 

