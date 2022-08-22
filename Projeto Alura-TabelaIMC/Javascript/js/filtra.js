var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes= document.querySelectorAll(".paciente");

    if(this.value.length > 0){  
     for(var cont = 0; cont< pacientes.length; cont++){  //----------> laço de repetição para criar a classe invisivel
        var paciente = pacientes[cont];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i");

        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }
}else{
    for(var cont = 0; cont< pacientes.length; cont++){
        var paciente = pacientes[cont];
        paciente.classList.remove("invisivel");
    }

}

});


