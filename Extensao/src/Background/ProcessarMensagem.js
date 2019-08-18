var Background = Background || {};
Background.ProcessarMensagem = {};

Background.ProcessarMensagem.Executar = (request, sendResponse) => {
    if(!("FN" in request) || !("data" in request))
        throw new Error("A requisição deve ter o seguinte modelo {FN:'nomedafuncao', data:'dadosOuObjeto' }.");

    switch (request.FN) {
        case Shared.EnumFn.PesquisarCEP:
            Background.Cep.Pesquisar(request.data, sendResponse);
        break;
        default:
            throw new Error("A função '"+ request.FN +"' não está disponível em background.");
    }
};