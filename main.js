
function verificarTime() {
  
    var continuarPerguntando = true;
  
    while (continuarPerguntando) {
      
      var respostaTime = prompt("Qual o melhor time?");
  
      
      if (respostaTime.toLowerCase() === "Athletico PR") {
        alert("Isso mesmo! Esse é o melhor time!");
        continuarPerguntando = false; // Sai do loop após a resposta correta
      } else {
        alert("Não é isso! Tente novamente.");
      }
    }
  }
  
  // Chamada da função para iniciar o processo
  verificarTime();

