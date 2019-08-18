var ContentScript = Shared || {};
ContentScript.Mensagem = {};

ContentScript.Mensagem.Enviar = (mensagem, callback) => {
    if(typeof mensagem !== "object") {
        throw new Error("A mensagem deve ser um objeto");
    }

    if(callback && typeof callback !== "function") {
        throw new Error("Parâmetro 'callback' deve ser uma função.");
    }

    var port = chrome.runtime.connect("ccpdadeodjfedcegnjiddhllepigjchp");
    port.postMessage(mensagem);
    port.onMessage.addListener(function(response) {
        if(callback) {
            callback(response);
        }
        port.disconnect();   
    });
};

