
'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {urlContains: 'cep'}
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

var ProcessarMensagens = (request, port) => {
    try {
        Background.ProcessarMensagem.Executar(request, port);
    } catch (error) {
        port.postMessage(new Shared.ResponseMessage(false, null, JSON.stringify(error)));
    }       
}

chrome.runtime.onConnectExternal.addListener((port) => {
    port.onMessage.addListener((request) => {
        ProcessarMensagens(request, port)  ;
    });
});

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        ProcessarMensagens(request, port);    
    });
});