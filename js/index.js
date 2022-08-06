

document.getElementById("enviar").addEventListener("click", function(event){
        event.preventDefault();
        gerarNomes();
  });

  

function gerarNomes() {
    let posibilidades = [".", "/", "12", "&", "5", "8"];
    let busca = document.getElementById("apelido").value;
    let result =  busca.toLowerCase().replace(" ", "");
    
    posibilidades.forEach(function(item, indice){   
      let li = document.createElement("li");
      let gerar = document.createTextNode(result + posibilidades[indice]);
      li.appendChild(gerar);
      document.getElementById("lista").appendChild(li);
      document.getElementById("formulario").reset();
    });

  }
