# (Fase 2) Estudo de API com NodeJS Axios e Express

Lembre-se disso aqui:

NodeJS, necessário para executar código JavaScript sem precisar do navegador.


Axios e Fetch > Solicitação / GET
Express e then > Resposta  / POST

Axios é uma biblioteca famosa do JavaScript muito utilizada para fazer solicitações HTTP do Node.js

Mais informaçoes sobre o AXIOS 

 Características


* Por baixo dos panos faz requisições Ajax no browser via XMLHttpRequests;
* Faz requisições http no Node.js;
* Suporta a API de Promises;
* Intercepta requisições e respostas (request & response);
* Cancela requisições;
* Transforma os dados em JSON automaticamente;
* No lado cliente suporta a proteção contra XRSF;
* Transforma os dados da requisição e da resposta.



# Projeto

Realizaremos uma configuração básica do NodeJS e escreveremos uma API JSON de back-end muito simples.
Esta API terá como base obter fatos aleatórios sobre gatos através da lista deste endpoint:


Rota: https://catfact.ninja/facts 


# Índice

* Pré-requisitos e ferramentas
* Conceitos Básicos
* Instalar e inicializar o NodeJS
* Instalar dependências ( axios, express )
* Instale dependências de desenvolvimento ( prettier, eslint, nodemon, cross-env )
* Crie seu primeiro servidor HTTP (“Hello, World!”)
* Criar rotas
* Construir uma API JSON


Estaremos construindo uma API que busque dados desta rota de API:

Rota: https://catfact.ninja/facts

Nossa rota de API será: http://localhost:3000/cat/facts


Vamos realizar uma solicitação HTTP GET usando o Axios para buscar um novo fato sobre cat para o caminho '/cat/facts'.


# Pré requisitos


* Familiaridade com expressão de função de seta e programação assícrona com async await


# Conceitos Básicos

* API => É o superconjunto

* API REST => É o subconjunto. (transferência de estado representacional) 

Existem muitas diferenças entre API e API RESTFUL

A API é conectar um aplicativo com os dados e serviços de outro aplicativo, concedendo todas as permissões necessárias. 
Portanto, é o conector entre dois aplicativos e é uma parte essencial de qualquer desenvolvimento de aplicativos.

Uma API REST é uma API de serviço da WEB que usa URLs e protocolo HTTP e JSON para formato de dados.

A razão para usar APIs REST em detrimento de outras é devido à sua simplicidade no desenvolvimento com recursos limitados e menos requisitos de segurança, compatibilidade do navegador, escalabilidade, todos desejados para serviços da web.

Geralmente, a comparação entre APIs é feita entre REST e SOAP. O SOAP é mais complexo, pois oferece menos liberdade e determina muitos padrões para implementação. Portanto, a API REST é o estilo mais preferido.

* NodeJS é um runtime JavaScript, que é aproveitado para escrever código JavaScript no lado do servidor.

* Express, é uma estrutura de modulo para Node, tornando a criação e o design de aplicativos Web e APIs rápidos e fáceis.


* Axios, é uma biblioteca muito util e popular usada para fazer solicitações HTTP baseadas em promessas.



# Configuração Basica

* 1 - Instale o NodeJS

https://nodejs.org/en/download/

*  2 - Inicialize o NodeJS

A primeira coisa que queremos fazer em qualquer novo projeto Node.js é inicializar o projeto com o NPM. 

Execute o comando abaixo:

~~~
$ npm init

~~~

~~~
/Projetos/Pessoal/API_Node$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (api_node) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
license: (ISC) 

~~~

Digite "Yes"

~~~

About to write to /home/harmo/Projetos/Pessoal/API_Node/package.json:

{
  "name": "api_node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Caio <caio.monsores>",
  "license": "ISC"
}


Is this OK? (yes) yes

~~~


Você sempre pode editar esses valores mais tarde em package.json. 


* 3 - Instale as dependencias (AXIOS E EXPRESS)


~~~
npm i axios express
~~~ 


* 4 - Instale as dependencias do desenvolvimento

Dependências de desenvolvimento são pacotes que você baixa para o desenvolvimento e teste local de seus projetos e não são exigidos pelo aplicativo no estágio de produção.

# Referencias

https://medium.com/trainingcenter/axios-ou-fetch-765e5db9dd59

https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900

https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/

https://medium.com/geekculture/nodejs-express-axios-and-the-basic-set-up-fe88a0b75dca

https://www.freelancinggig.com/blog/2018/11/02/what-is-the-difference-between-api-and-rest-api/