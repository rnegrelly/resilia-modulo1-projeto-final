
function botaoJogar(){
    var escolha = prompt("Digite sua escolha: 1 ou 2")
    
    while (true) {
       
    if (escolha == 1){
      
      alert("A famosa sandália foi utilizada em diversos momentos da para safar Hermes de suas enrrascadas. E dessa vez não foi diferente, com elas, Hermes e Perséfone conseguem escapar.")
      mudarPagina(escolha);
      break;
        
    }else if(escolha ==2){

      mudarPagina(escolha);
      break;
    }
    else{
      alert('Decisão inválida. Digite 1 ou 2');
      escolha = prompt('Digite o número da decisao que deseja tomar');
      break; 
    } 
}
}

function mudarPagina(escolha) {

    if (escolha == 1) {
      window.location.assign("hermes-fase2.html");
    } else {
      window.location.assign("hermes-fase1-gameover.html");
      
    }
  } 

