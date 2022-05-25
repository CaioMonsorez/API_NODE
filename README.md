# (Fase 2) Estudo de API com NodeJS Axios e Express

Lembre-se disso aqui:

NodeJS, necessário para executar código JavaScript sem precisar do navegador.


Axios e Fetch > Solicitação / GET
Express e then > Resposta  / POST

Axios é uma biblioteca famosa do JavaScript muito utilizada para fazer solicitações HTTP do Node.js

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

Esta API terá como base obter fatos aleatórios sobre gatos através da lista deste endpoint:


Rota: https://catfact.ninja/facts 


# Índice

* Pré-requisitos e ferramentas
* Conceitos Básicos
* Instalar e inicializar o NodeJS
* Instalar dependências ( axios, express )
* Instale dependências de desenvolvimento ( prettier, eslint, nodemon, cross-env )
* Primeiro servidor HTTP (“Hello, World!”)
* Criar rotas
* Construir uma API JSON


Construiremos uma API que busque dados desta rota de API:

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


* Installa o Pacote PRETTIER

~~~ 

npm install --save-dev --save-exact prettier

~~~


Em seguida, crie um arquivo de configuração vazio para que os editores e outras ferramentas saibam que você está usando o Prettier:


~~~

echo {}> .prettierrc.json


~~~


Em seguida, crie um arquivo .prettierignore para que a CLI e os editores do Prettier saibam quais arquivos não devem ser formatados. Aqui está um exemplo:




* 5 - Instale o ESLint


De acordo com os documentos oficiais, o ESLint é uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript/JavaScript , com o objetivo de tornar o código mais consistente e evitar bugs

As etapas abaixo são diretamente de sua documentação . Escreva a linha de comando abaixo em seu terminal integrado




~~~


npm install eslint --save-dev


~~~


você deve então configurar um arquivo de configuração, e a maneira mais fácil de fazer isso é usar o --initsinalizador: isso novamente fará algumas perguntas no seu terminal, siga as instruções



~~~


npx eslint --init

Deseja criar o @eslint/create-config [Yes]

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No 
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
eslint-plugin-react@latest
? Would you like to install them now with npm? › Yes


~~~



Nota: --init pressupõe que você já tenha um package.jsonarquivo. No nosso caso já criamos package.json executando npm init.




A linha de comando abaixo desativa todas as regras que são desnecessárias ou podem entrar em conflito com [Prettier].


~~~

npm install --save-dev eslint-config-prettier

~~~

Agora você pode executar a ferramenta ESLint passando o comando abaixo


~~~

eslint src/**

~~~


* 6 - Instale o Nodemon

De acordo com o site, o nodemon é uma ferramenta utilitária que monitorará quaisquer alterações feitas em sua pasta de origem e reiniciará automaticamente seu servidor.

Use a linha de comando abaixo para instalar o nodemon como uma dependência de desenvolvimento.


~~~~
npm install --save-dev nodemon

~~~~

* 7 - Agora, atualize o package.json

Adicione os scripts abaixo. Scripts são tipicamente comandos ou sequências de comandos que normalmente seriam executados no terminal.


~~~

"roteiros": {
"format": "prettier --write \"src/**/*.{js,json}\"",
"lint": "eslint src/**",
"start":"nodemon src/app.js"
},

~~~

Adicioná-lo nos scripts agiliza o processo, agora em vez de executar o comando prettier — write \”src/**/*.{js,json}\” no seu terminal toda vez que você quiser formatar o documento, tudo o que você precisa executar é este comando 

~~~
npm run format
~~~


* 8 - Métodos de solicitação HTTP

O HTTP define um conjunto de métodos de solicitação para indicar a ação desejada a ser executada para um determinado recurso. 

Embora também possam ser substantivos, esses métodos de solicitação às vezes são chamados de verbos HTTP . Cada um deles implementa uma semântica diferente, mas alguns recursos comuns são compartilhados por um grupo deles: por exemplo, um método de solicitação pode ser seguro , idempotente ou armazenável em cache .

* GET
O GET método solicita uma representação do recurso especificado. Solicitações usando GET devem apenas obter dados.

* HEAD
O HEAD método solicita uma resposta idêntica a uma GET solicitação, mas sem o corpo da resposta.

* POST
O POST método envia uma entidade ao recurso especificado, geralmente causando uma alteração no estado ou efeitos colaterais no servidor.

* PUT
O PUT método substitui todas as representações atuais do recurso de destino pela carga útil da solicitação.

* DELETE
O DELETE método exclui o recurso especificado.

* CONNECT
O CONNECT método estabelece um túnel para o servidor identificado pelo recurso de destino.

* OPTIONS
O OPTIONS método descreve as opções de comunicação para o recurso de destino.

* TRACE
O TRACE método executa um teste de loopback de mensagem ao longo do caminho para o recurso de destino. O trace é muito usado para testar o tempo que uma req leva para ir do navegador até o sistema e retornar.

* PATCH
O PATCH método aplica modificações parciais a um recurso.



* 8 O Primeiro Hello World!

Vamos criar um servidor HTTP, o servidor escutará a porta 3000, e enviará Hello, World! para o navegador mediante uma solicitação GET.


Agora, vamos criar uma pasta chamada src, src significa fonte. O diretório src conterá todo o material fonte para construir o projeto. Não é obrigatório fazer isso, mas é considerado uma boa prática.


Não é necessário usar uma estrutura de pastas padrão, mas seguir uma estrutura adequada indicará como você poderá dimensionar a base de código existente no futuro e também ajudará na manutenção e legibilidade do código.

Dentro da pasta src, crie o arquivo app.js

Este aplicativo iniciará um servidor e escutará na porta 3000 para conexões


~~~ JavaScript

const express = require("express"); //Carrega a biblioteca express

const app = express() // app se assume express 


app.get("/", (req,res) =>{ // inicia a rota da solicitação. A Rota = localhost:3000
//Toda vez que eu abrir o localhost:3000 ele vai retornar a requisição no send. Então nessa rota
//ele vai solicitar a requisição e a resposta


res.send("HelloWorlds!"); //   resposta da requisição quando abre a rota

});


app.listen(3000, () => { //  indica qual vai ser a porta tcp que o sistema vai escutar
//seu aplicativo vai pedir para sistema operacional redirecionar tudo que chegar na porta tcp 3000 para ele.
//Ai quando chegar algum dado na porta tcp 3000 o S.O. chama o seu app para tratar

console.log('servidor rodando em 3000')

})


~~~


O aplicativo responde com “Hello World!” para solicitações à URL raiz ( /) ou rota.

* 9 - Execute testes e inicie e reinicie seu aplicativo automaticamente

O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor. Imagine a seguinte situação, você está desenvolvendo uma aplicação com o Node, e criou uma rota, para acessá-la, é preciso reiniciar o servidor.


~~~
npm install --save dev nodemon

~~~

Para rodar o aplicativo, é necessário configurar os Scripts que estão no Package.json.

Determine um caminho no package.json, em Scripts uma variável para rodar a aplicação API que criamos.
node src/app.js

~~~
 "scripts": {
    "test": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
~~~

* 10- Instalar o Thunder Cliente

o Thunder Client é uma interface gráfica para você testar suas requisições HTTP.

Você pode instalar o Thunder Cliente nas extenções do VSCode,





# Referencias

https://medium.com/trainingcenter/axios-ou-fetch-765e5db9dd59

https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900

https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/

https://medium.com/geekculture/nodejs-express-axios-and-the-basic-set-up-fe88a0b75dca

https://www.freelancinggig.com/blog/2018/11/02/what-is-the-difference-between-api-and-rest-api/

https://prettier.io/docs/en/install.html

https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose

https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/

https://youtu.be/Oe421EPjeBE


https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods