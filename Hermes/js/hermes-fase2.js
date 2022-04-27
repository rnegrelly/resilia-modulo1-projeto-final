
function botaoJogar(){
  var escolha = prompt("Digite sua escolha: 1 ou 2")
  
  while (true) {
     
  if (escolha == 1 ){
      
    alert("Hermes entrega as sandálias aladas a Caronte, que  aceita de bom grado, e ambos atravessam o rio para a dita passagem secreta.")
    mudarPagina(escolha);
    break;
      
  }else if(escolha ==2){

    alert("Hermes ergue as sandálias aladas para entregar ao barqueiro, mas perséfone, percebendo que as sandálias serão necessárias para chegar a dita passagem , interrompe Hermes e oferece todas as suas moedas de ouro a Caronte, que aceita de bom grado.")
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
    window.location.assign("hermes-fase2-gameover.html");
  } else {
    window.location.assign("hermes-fase3.html");
    
  }
} 
