
function botaoJogar(){
  var escolha = prompt("Digite sua escolha: 1 ou 2")
  
  while (true) {
     
  if (escolha == 1){
    
    alert("Medusa consegue convencer Atena do acontecido, informando sobre os planos de Poseidon sobre a sua vingança. Atena vai atrás de Poseidon e o transforma em uma górgona e o isola em uma ilha deserta.")
    mudarPagina(escolha);
    break;
      
  }else if(escolha ==2){

    /*alert('Atena não acredita, pois Medusa já tinha antecedentes vaidosos em sua história. Transforma Medusa em górgona e a isola em uma ilha deserta.');*/
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
    window.location.assign("medusa-fase3.html");
  } else {
    window.location.assign("medusa-fase2-gameover.html");
    
  }
}