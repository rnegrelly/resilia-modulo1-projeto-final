
function botaoJogar(){
  var escolha = prompt("Digite sua escolha: 1 ou 2")
  
  while (true) {
     
  if (escolha == 1){
      
    mudarPagina(escolha);
    break;
      
  }else if (escolha ==2){

    alert("Já sem esperanças, Hermes lembra que carregava consigo sua harpa e decide cantar uma última vez para Persérfone.")
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
    window.location.assign("hermes-fase3-gameover.html");
  } else {
    window.location.assign("hermes-fase3-concluido.html");
    
  }
} 


