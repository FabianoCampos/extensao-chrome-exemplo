var ContentScript = ContentScript || {};
ContentScript.Cep = {};

ContentScript.Cep.Init = () => {
    //registrar eventos da pagina de cep
    $("input#cep").on("keypress", function(e){
        if(e.keyCode===13) {
            ContentScript.Mensagem.Enviar(
                {
                    FN : Shared.EnumFn.PesquisarCEP, 
                    data: $(this).val()
                }, 
                ContentScript.Cep.Preencher
            );
        }
    });
};

ContentScript.Cep.TratarResposta = (resposta) => {
    if(!resposta.success) {
        alert(resposta.message);
        return;
    }
    return resposta.data;
};

ContentScript.Cep.Preencher = (resposta) => {
    let conteudo = ContentScript.Cep.TratarResposta(resposta);
    if(!conteudo)
        return;
        
    if (!("erro"  in conteudo)) {
        $('input#rua').val(conteudo.logradouro);
        $('input#bairro').val(conteudo.bairro);
        $('input#cidade').val(conteudo.localidade);
        $('input#uf').val(conteudo.uf);
        $('input#ibge').val(conteudo.ibge);
    } 
    else {
        ContentScript.Cep.LimpaFormulario();
    }
};

ContentScript.Cep.LimpaFormulario = () => {
    $('input#rua').val("");
    $('input#bairro').val("");
    $('input#cidade').val("");
    $('input#uf').val("");
    $('input#ibge').val("");
}
$(document).ready(function(){
    ContentScript.Cep.Init();
});