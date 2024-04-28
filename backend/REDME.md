# Gerador de curriculos


Este projeto tem o intuito de facilitar o processo de criação de curriculos. 

A ideia é salvar os curriculos numa base de dados e recupera-los em formato JSON usando uma API, e usar esse JSON para preencher templates de curriculos.

Inicialmente é para ser usado por mim, mas futuramente suportará multiplos usuários, assim podendo disponibilizar como um serviço na Web.

## Backend

### Ferramentas usadas
- FastAPI: criar endpoints rapidamente e sem complexidade
- Pydantic: Usar em conjunto com a FastAPI para mapear requisições e respostas usando Schemas, e também validar os dados das requisições.
- SQLAlchemy: ORM usado, já que não conheço outro e a FastAPI não tem um embutido pois esse nem é seu intuito. Com ele posso criar models e mapear para as tabelas do BD.
- Alembic: Usado em conjunto com o SQLAlchemy para gerar migrações, criar e alterar tabelas.

### Arquitetura
- Usar princípios básicos como o príncípio de demeter, cada módulo, classe ou função/método faz somente o que diz respeito a ele mesmo. 
- Programar para Interfaces.
- Usar uma arquitetura de camadas. *
ainda em dúvida sobre usar a Clean Arch, pois para um projeto pequeno ela acaba adicionando complexidade desnecessária. Mas separar as preocupações em módulos é uma boa.
Exemplo:
    - db/db.py - para a conexão singleton com o banco.
    - db/models.py - para modelar as tabelas.
    - repository.py - para métodos de insert, update, select e delete usando o db.py e o model.py.
    - ? service.py - não sei se preciso desse, ele usaria o repository.py, mas fica parecendo uma camada desnecessária... preciso pesquisar. Para testar o service, ele pode receber um FakeRepository, aí eu vejo vantagem. * Acho que o service seria como um *controller* e o repository como um *beam*... sei lá.
    - routes.py - fica responsável por definir os endpoints/rotas. Usa o service.py
    - app.py - carrega a apliucação FastAPI(), configura Cors e outras coisas e usa o routes.py.
    - main.py - inicia a aplicação usa o app.y, e inicia o Uvicorn.

### Características
- Endpoinsts: curriculum - POST, GET id, GET all, PUT e DELETE
- A entidade Curriculum terá outras entidades, como Experience e Education, e a relação é 1 x M, sendo que Expecience e Education devem ter uma tag informando se vai mostrar ou não (ou seja para dizer se quero mostrar tal formação ou educação ou se é desnecessário) - no front vai ter uma checkbox para isso.

- Endpoints - User - Isso tem que ser melhor definido ainda, mas a ideia é ter login e senha e possibilitar usuários criarem seus curriculos, um serviço web.

## Frontend

### Ferramentas usadas
- ReactJS: Com o React criamos componentes gráficos fácilmente e podemos consumir a API.
- Axios: Embora seja fácil consumir APIs com React, o Axios torna isso mais fácil, os dois trabalham bem juntos.
- Router: O router facilita a criação de rotas de uma forma fácil.
- Redux: Gerenciar árvore de estados, o Redux permite fazer isso facilmente, e é melhor para aplicações grandes.

### Arquitetura
- Usar camadas como no backend - pesquisar arquiteturas usadas com React.

### Características
- Form para adicionar o curriculo e editar.
- Listagem de curriculos, com opção para deletar.
- Filtrar listagem.
- Gerar PDF.
- Usar templates - escolher um template para gerar o PDF - no início só vai ter 1
- Visualização online HTML usando um dos templates escolhidos.
- Gerar link compartilhável, assim o user pode compartilhar seu curriculo com outras pessoas atravéz de um link.
- Login através de redes sociais ou apenas com email e password. Ultima coisa*



# Por fim, ver como funciona hospedagem.
