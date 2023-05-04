# Projeto Pizzaria

## Dependencias
-   node
-   express
-   yarn
-   prisma
-   cors
-   Banco Postgresql
-   bcryptjs
-   jsonwebtoken
-   dotenv

Para rodar o migrate  do prisma para o banco de dados é necessario:
-   Instalar o prisma
-   rodar yarn prisma migrate dev

## Relacionamento das tabelas

![relacionamentoBanco](/assets/bancoPizza.png)

- **User**: Tabela padrão de usuario
- **Categoria**:  Categoria para o produto
- **Produto**: Produto qualquer
- **Order**: Uma "mesa" ou uma "pedido" e dentro dele teram os item
- **OrdemItem**: Cada item que será inserido na Order