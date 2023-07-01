

async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertido = await consultaCEP.json()
        if(consultaCEPConvertido.erro){
            throw Error('CEP nao existente!')
        }
    let cidade = document.getElementById('cidade')
    let logradouro = document.getElementById('endereco')
    let estado = document.getElementById('estado')
    let bairro = document.getElementById('bairro')
    

    cidade.value = consultaCEPConvertido.localidade;
    logradouro.value = consultaCEPConvertido.logradouro
    estado.value = consultaCEPConvertido.uf;
    bairro.value = consultaCEPConvertido.bairro
    console.log(consultaCEPConvertido);
    return consultaCEPConvertido;
    }catch(erro){
        console.log(erro);
        mensagemErro.innerHTML = '<p>CEP inválido, tente novamente.</p>'
    }
}


const cep = document.getElementById('cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value))










/*Utilizando o promise.all
let ceps = ['90870390', '90670200']
let conjuntoCeps = ceps.map((valores)=>{
buscaEndereco(valores)
})
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
*/
/*
Utilizando then para resolver a promise


.then(resposta => resposta.json())
.then(r=>{
    if(r.erro){
        throw Error('Esse cep não existe!')
    }else{
    console.log(r)}
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Programa finalizado!'));*/






/*Event Loop verifica o que deve ser chamado e a call stack é a fila de todos os recursos pendentes. 
Task Queue = Tarefas assíncronas que são colocadas em espera
Callback = funções que são enviadas como parâmetros para outras funções
API = Application Programming Interface ou Interface de Programação de Aplicações
Aplicação Cliente = aplicação que envia as requisões
Aplicação Servidor = aplicação que envia as respostas

Realiza a conexão entre servidor e cliente






*/