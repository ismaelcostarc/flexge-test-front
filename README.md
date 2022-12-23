## Front para o teste da Flexge

## Projeto

Neste teste você deve desenvolver uma simulação de uma funcionalidade. A
funcionalidade é um CRUD de contratos com seus respectivos produtos. Cada contrato está
relacionado a uma Company. O Cadastro de Companies deve possuir no mínimo 10
registrados armazenados diretamente no banco de dados, sendo que cada Company deve
conter o id e o nome.

Requisitos gerais:
- Criar login API + Front (pode ser em memória com username e senha fixo)
- As chamadas para a API devem ser autenticadas
- Deve ser utilizado o react context para armazenar a informação do usuário logado
- Deve ser utilizado o react router para definição das rotas do front
- Somente a tela de login deve ser pública
- Pelo menos uma chamada de api deve ser feita utilizando o redux-saga
- Pelo menos um caso deve ser armazenado no redux
- Pelo menos em um form deve ser utilizado o react-state
- Devem ser criados componentes para o form
- A tela de consulta de contratos deve possuir paginação e ordenação na API e a
consulta deve utilizar mongo aggregators

## Executar o projeto

Versão do node utilizada: 18.4.0

```
npm i
npm run dev
```

Login:
```
Usuário: usuario
Senha: 12345678
```