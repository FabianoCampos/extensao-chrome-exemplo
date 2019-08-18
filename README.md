Extensão Chrome
===================

Extensão para Google Chrome, criado como modelo para aprendizado.
Esta extensão consome serviço de pesquisar cep da API disponibilizada em [ViaCep](https://viacep.com.br/).

## Diretórios e arquivos
- Arquivo **cep.html**: Arquivo de exemplo para uma página. Contem somente campos de endereço.
- Diretório **Extensao**: Contem a extensão. A instalação sem compactação deve ser feita apartir deste diretório.
 - Diretório **Extensao/vendor**: Diretório para bibliotecas de terceiros. 
 - Diretório **Extensao/src**: Diretório com funcionalidadades da extensão.

## Funcionalidades trabalhadas
* Acessos a recursos da extensão diretamente da página (cep.html)
* Requisição cross-domain com o site [https://viacep.com.br](https://viacep.com.br/).
* Manipulação do DOM através da extensão via Content Scripts.
* Troca de mensagem entre content scripts e background scripts.
* Criação da página da extensão (Extensao/popup.html).
* Disponilizar arquivo da extensão visível para a página. 

## Observação
Extensão testadar em ambiente local, para testar uma pagina hospedada, é necessários alterar os arquivos manisfest.json e background.js