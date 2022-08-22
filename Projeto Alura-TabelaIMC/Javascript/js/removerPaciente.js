var pacientes = document.querySelectorAll(".paciente");

// forEach = para cada item do meu array 
/* pacientes.forEach(function(paciente){
    paciente.addEventListener ("dblclick", function(){                                     //dblclick = duplo clique
        console.log("Fui clicado com um duplo click!");
        this.remove();
    });

});
*/

var tabela = document.querySelector("table");
tabela.addEventListener("click", function(event){
   
    event.target.parentNode.classList.add("fadeOut");

setTimeout(function() {
    event.target.parentNode.remove();

}, 500);

});