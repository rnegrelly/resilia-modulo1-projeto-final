
function botaoJogar(){
  var escolha = prompt("Digite sua escolha: 1 ou 2")
  
  while (true) {
     
  if (escolha == 1 || escolha ==2){
      
    mudarPagina(escolha);
    break;
      
  }else{
    alert('Decisão inválida. Digite 1 ou 2');
    escolha = prompt('Digite o número da decisao que deseja tomar');
    break; 
  } 
}
}

function mudarPagina(escolha) {

  if (escolha == 1) {
    window.location.assign("hercules-fase3-concluido.html");
  } else {
    window.location.assign("hercules-fase3-gameover.html");
    
  }
} 


