var ContentScript = ContentScript || {};
ContentScript.ProcessarMensagem = {};

ContentScript.ProcessarMensagem.Executar = (request, sendResponse) => {
    if(!("FN" in request) || !("data" in request))
        throw new Error("A requisição deve ter o seguinte modelo {FN:'nomedafuncao', data:'dadosOuObjeto' }.");

    switch (request.FN) {
        default:
            throw new Error("A função '"+ request.FN +"' não está disponível em background.");
    }
};