
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
    
    
    var form = document.querySelector("#form-adiciona");
    //extraindo informações do paciente do form

     var paciente = obtemDoPacienteFormulario(form);
     
    

    var erros= validaPaciente(paciente);
    console.log(erros);

    if(erros.length> 0){
        exibeMensagensDeErro(erros);
        return;

    }

    if(!validaPaciente(paciente)){
        console.log("Paciente inválido!");
        return ;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML= ""; // controla o html interno do elemento zerando o texto escrito quando recarrregada a página

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    }); 
        
};

function obtemDoPacienteFormulario(form){

    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /* bloco de código sem criação de função 

        var nomeTd = document.createElement("td");
        nomeTd.classList.add("info-nome");
        nomeTd.textContent = paciente.nome;
    */
                                     //dado        //classe
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc" ));

    return pacienteTr;
}

function montaTd(dado, classe ){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

        var erros = [];

    if(paciente.nome.length == 0 ){
        erros.push("O campo nome precisa ser preenchido");
    }
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");

    }  
    
    if(paciente.gordura.length == 0) {
        erros.push("O campo gordura precisa ser preenchido");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo peso precisa ser preenchido");
    }
    
    return erros;
}
