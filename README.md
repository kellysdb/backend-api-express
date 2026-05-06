# Tópicos importantes

- Qual a linguagem de programação utilizada para o nosso Backend? 
Java Script

- O que é o Node.js?
O ambiente para executar o js/runtime

Outras runtime: Bun, Deno

- O que é NPM?
Gerenciador de pacotes. Node package manager.

- Como criar a pasta node_modules?
Instalando um pacote.

___________________________________________________________________

node_modules- pasta que armazena todos os pacotes e dependências.

packagelock - Grava as árvores de dependências
___________________________________________________________________

- O que é o Express.js?
Framework para Node.js. Rápido, minimalista, menos opinativo. E para construir APIs 

Framework - um conjunto de recursos e ferramentas para resolver um problema baseado em alguma estrutura, mostra COMO resolver, dá um caminho, não só os recursos soltos. Os frameworks podem ser mais opinativo ou menos opinativo. O Express é menos opinativo.

- Framework e biblioteca: Qual a diferença? 
O Framework específica como resolver o problema. Diferente da biblioteca, que não dá essa base. 

- O que é uma API? 
Application Programming Interface (Interface de Programação de Aplicação).
Conjunto de rotas(endpoints) com métodos.

Interface é todo meio de comunicação entre humano e computador. Também pode ser um meio de comunicação entre dois computadores ou entidades. Possui Entrada e Saída. Tudo que é físico = interface de hardware. 

- Como mudar o formato de importação de "require"(padrão commonjs)?
Ir no packagejson, colocar que o "type" é "module"

- O que é HTTP? 
Hypertext Transfer Protocol. Protocolo entre cliente e servidor.

HTTPS - Camada segura entre backend e frontend, protege dados.
Hypertext Transfer Protocol Secure

- Quais os métodos de requisição HTTP e para que serve cada um deles?
Tipos de requisição:
GET: pegar, buscar, resgatar
POST: postar, cadastrar, adicionar
PUT: editar, alterar, atualizar dados (edição completa)
PATCH: similar ao PUT, altera/atualiza parcialmente um campo
DELETE: deletar, excluir, apagar

- Para que serve o --watch ao rodar o servidor?
Observa todos os arquivos que compõe o projeto. Ao salvar uma informação, ele sobe de novo o servidor para aplicar a mudança.

- Para que serve o Router do Express.js?
Para separar um conjunto de rotas em um arquivo separado. Facilita manutenção.

- O que é o padrão de projeto MVC?
Dividido em 3 camada: Model, View, Controller. Organização do código e facilidade de manuntenção.

- Qual a responsabilidade de cada camada?

Model: 
Definir as regras de negócio;
Validação de dados;
Acesso ao Banco de Dados;

View:
Camada de apresentação;
Interface;
Front-end;

Controller: 
Controle do fluxo da aplicação;
Entrada, processamento e saída;

- O que é ORM?
ORM (Object-Relational Mapping ou Mapeamento Objeto-Relacional), faz a ponte a sua aplicação(js) e o banco de dados. Cria o modelo que faz uma referência as tabelas do banco de dados. Cria uma série de funções mapeadas com as tabelas.

- Quais as vantagens de utilizar um ORM?
 Conseguir trocar de bancos de dados com facildade.

- Como utilizar os parametros URL?
São utilizados para enviar informações dinâmicas dentro da própria rota de uma API. No Express.js, eles são definidos utilizando dois pontos (:) antes do nome do parâmetro, como em /user/:id. Esses parâmetros permitem identificar recursos específicos, como o ID de um usuário ou produto. Para acessá-los dentro da aplicação, utilizamos o objeto req.params, que contém todos os valores passados na URL. 

- O que é um Middleware? (exemplo Logger)
Middleware é um padrão de projeto que cria um fluxo de execução de funções,  cada função tem uma responsabilidade no fluxo e é chamada de Middleware.

No express, ele usa 2 objetos:
req e res.


# Comandos do Prisma

Instalar o Prisma:
    npm i prisma -D
    npm i dotenv -D
    
    Para MySQL e Mariadb
    npm install @prisma/client @prisma/adapter-mariadb mariadb

Init - iniciar o projeto:
    npx prisma init 

Gera o banco de dados a partir do schema do Prisma:
    npx prisma db push

Gera o schema do prisma a partir do banco de dados:
    npx prisma db pull

Gera as funções para interagir com os modelos mapeados no schema:
    
obs. toda vez que alterar o schema, rodar esse comando.


