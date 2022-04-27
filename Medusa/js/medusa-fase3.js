
function botaoJogar(){
  var escolha = prompt("Digite sua escolha: 1 ou 2")
  
  while (true) {
     
  if (escolha == 1){
    
    /*alert("")*/
    mudarPagina(escolha);
    break;
      
  }else if (escolha ==2){

    mudarPagina(escolha);
    break;
  }
  else{
    alert('Decisão inválida. Digite 1 ou 2');
    escolha = prompt('Digite o número da decisao que deseja tomar');
    
  } 
}
}

function mudarPagina(escolha) {

  if (escolha == 1) {
    window.location.assign("medusa-fase3-concluido.html");
  } else {
    window.location.assign("medusa-fase3-gameover.html");
    
  }
} 


