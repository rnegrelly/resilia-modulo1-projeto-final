
function botaoJogar(){
    var escolha = prompt("Digite sua escolha: 1 ou 2")
    
    while (true) {
       
    if (escolha == 1){
        
      mudarPagina(escolha);
      alert("Medusa grita por socorro às sacerdotisas do templo, que a escutam, e a salvam do ataque do Poseidon.")
      break;
        
    }else if (escolha ==2){

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
      window.location.assign("medusa-fase2.html");
    } else {
      window.location.assign("medusa-fase1-gameover.html");
      
    }
  } 

