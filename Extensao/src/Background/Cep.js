var Background = Background||{};
Background.Cep = {};

//#region Storage CEP
Background.Cep.Storage = {};
Background.Cep.Storage.data = [];
Background.Cep.Storage.Add = (entidadeCep) => {
    if(!Background.Cep.Storage.Get(entidadeCep.cep.replace(/\D/g, ''))){
        Background.Cep.Storage.data.push(entidadeCep);
    }
};
Background.Cep.Storage.Get = (cep) => {
    var response = null;
    var data = Background.Cep.Storage.data ;
    for(var c in data) {
        if(data[c].cep.replace(/\D/g, '') == cep) {
            response = data[c];
            break;
        }
    }
    return response;
};
//#endregion

Background.Cep.Pesquisar = (strCep, port) => {
    let cep = strCep.replace(/\D/g, '');
    if($.trim(cep)==="") {
        throw new Error("CEP não informado.");
    }        
    var validacep = /^[0-9]{8}$/;
    if(!validacep.test(cep)) {
        throw new Error("CEP inválido.");
    }
    var storage = Background.Cep.Storage.Get(cep);
    if(storage) {
        port.postMessage(new Shared.ResponseMessage(true, storage, "Ok"));
        return;
    }

    $.ajax({
        url      : "https://viacep.com.br/ws/" + cep + "/json/",
        dataType : "json",
        type     : "GET"
    })
    .done((response) => {
        port.postMessage(new Shared.ResponseMessage(true, response, "Ok"));
        Background.Cep.Storage.Add(response);
    })
    .fail(() => {
        port.postMessage(new Shared.ResponseMessage(false, arguments, "Erro ao pesquisar cep."));
    });
};