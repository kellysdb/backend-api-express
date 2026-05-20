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


# Proximos topicos - P2

- Para que serve a biblioteca do Zod?
O Zod é uma biblioteca de validação de dados para JavaScript e TypeScript. Ela serve para definir esquemas e validar informações recebidas pela aplicação, garantindo que os dados estejam no formato correto antes de serem utilizados, como em cadastro de usuários, APIs e formulários.

- Para que serve a função Partial?
A função Partial transforma todas as propriedades de um objeto em opcionais. É muito utilizada em atualizações (update), quando não é necessário enviar todos os campos do objeto.

Exemplo: em um update de usuário, pode-se alterar apenas o nome sem precisar enviar email e senha.

- Qual a diferença do parse para o safeParse?
        parse()
Faz a validação dos dados.
Se houver erro, lança uma exceção (throw error).

        safeParse()
Também valida os dados.
Porém, não lança exceção.
Retorna um objeto com success: true ou success: false, permitindo tratar o erro de forma mais segura.

    Ou seja, parse interrompe a execução com erro, enquanto safeParse permite verificar o resultado sem quebrar a aplicação.


    Tratamento de erros

- Qual o papel do ErrorHandler?
Cria um tratamento de erro genérico. Quando é lançado uma exceção.
Erros genéricos ou globais da aplicação.
Exceções inesperadas.
Erros de servidor e validações centralizadas.

- Quais erros devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch do controller?

Controller mensagens mais amigaveis para erros mais especificos.

Erros específicos da regra de negócio.
Casos em que é necessário retornar mensagens mais amigáveis ou personalizadas ao usuário.

Exemplo:

"Usuário não encontrado" → pode ser tratado no controller.
"Erro interno do servidor" → normalmente tratado pelo ErrorHandler.

 - Quais os parametros de entrada de um middleware de ErroHandler?
Um middleware de erro recebe quatro parâmetros:

(error, req, res, next)
error → objeto do erro lançado.
req → requisição recebida.
res → resposta enviada ao cliente.
next → função de continuidade do middleware.

    O next não deve ser removido, mesmo sem uso, porque a identificação de middleware de erro depende da quantidade de parâmetros. 

    Query Params (/user/?name=kelly)
- Como capturar um parametro query da url no Controller?
Os query params são capturados usando req.query.

Exemplo:
URL:
/user?name=kelly

Controller:
const { name } = req.query;

- Para que são utilizados em geral os query params?
Filtros
Pesquisas
Ordenação
Paginação
Personalização de consultas

Exemplos:
/products?category=roupa

(Filtro)
/users?page=2

 - Autenticação com JwT
 A autenticação com JWT (JSON Web Token) é um método de segurança que utiliza tokens para identificar e validar usuários autenticados. Após o login, o servidor gera um token que é enviado ao cliente e usado nas próximas requisições para comprovar a identidade do usuário, sem precisar armazenar sessão no servidor.

 - Quais são as diferenças dos métodos de Autenticação? E como funciona?
 
 - Basic Acess Base64(email:pass)
  
  A autenticação Basic Auth funciona enviando usuário e senha codificados em Base64 no cabeçalho da requisição.

Características:

    Usa email e senha em todas as requisições.
    Base64 não é criptografia, apenas codificação.
    Depende de HTTPS para maior segurança.
    Menos utilizado em aplicações modernas.

 - Bearer Token(Opaque)

  O Bearer Token Opaque é um token sem informações legíveis pelo cliente. Ele funciona como um identificador.

Funcionamento:

    O servidor gera o token.
    O cliente envia esse token nas requisições.
    O servidor consulta banco ou sessão para validar.

Características:

    Não contém dados visíveis.
    Requer validação no servidor.
    Mais seguro para esconder informações.
    Depende de armazenamento do token no backend.

 - Bearer Token JWT
 
 O JWT (JSON Web Token) é um token que carrega informações do usuário dentro dele mesmo.

Funcionamento:

    Usuário faz login.
    Servidor gera um JWT assinado.
    Cliente envia o token nas próximas requisições.
    O servidor valida assinatura e expiração.

Características:

    Não precisa consultar banco para validar em muitos casos.
    Contém dados do usuário.
    É assinado digitalmente.
    Stateless (sem sessão no servidor).
    Muito usado em APIs modernas.

 - Bearer Toekn JWT + Refersh Token

 Access Token (JWT)

    Curta duração.
    Usado para acessar recursos protegidos.

 Refresh Token

    Maior duração.
    Serve para gerar um novo access token quando ele expira.

Funcionamento:

    Login gera Access Token + Refresh Token.
    Cliente usa o Access Token.
    Quando expira, usa o Refresh Token para solicitar outro.
    Evita que o usuário precise fazer login novamente.

Características:

    Mais seguro.
    Melhora experiência do usuário.
    Permite expiração curta do JWT.
    Muito usado em aplicações modernas.

 - Quais as características dos JWT?

Stateless (sem sessão): não depende de sessão armazenada no servidor.
Assinado digitalmente: garante autenticidade e integridade do token.
Compacto: fácil de transportar em headers HTTP.
Autocontido: pode armazenar informações do usuário e permissões.
Possui expiração: utiliza campos como exp para definir validade.
Pode ser validado rapidamente: normalmente sem consulta ao banco.
Muito usado em APIs REST e autenticação moderna.

    O JWT é dividido em 3 partes:

Header → define algoritmo e tipo do token.
Payload → contém dados (claims).
Signature → assinatura que garante segurança e integridade do token.