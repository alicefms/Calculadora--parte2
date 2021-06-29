
<h1 align="center">
<img src="public/logo.png "></h1>


# Divulga Mais - agência

 * [Descrição](##Descrição)
 * [Estutura](##Estutura )
 * [Status do Projeto ](###StatusdoProjeto)
 * [Features](##Features)
 * [Demonstração](##Demonstração)
 * [Pré-requisitos e como rodar a aplicação](#Prerequisitos)
 * [Tecnologias utilizadas](#Tecnologias)
 * [Autora](#Autora)


     

## Descrição

Projeto criado como requisito da seleção da Academia Capigemini

O projeto é de um sistema de uma agência de publicidade, onde é possível, na página inicial escolher entre cadastrar um anúncio ou gerar relátórios dos anúncios já cadastrados.


## Estutura 

Na pasta controller, há o arquivo anuncio.controller, onde é feita a manipulação do banco de dados, para inserir um novo anuncio ou para buscar os anuncios cadastrados.

A pasta db contem os arquivos de inicialização do banco de dados e o de configuração dele.

Na pasta Services está o arquivo calculadora.js, que foi criado como a parte 1 do desafio. Ele sofreu algumas modificações para gerar o relatório de alcance do anuncio considerando o período de duração do anúncio.
Ele executa o cálculo da quantidade máxima de visualizações, cliques e compartilhamentos que o anúncio terá, considerando o período de duração do anúncio, após ser compartilhado pela empresa Divulga Tudo, seguindo a lógica:

1 real -> 30 views
100 views ->12 clicks
20 clicks -> 3 compartilhamentos
1 compartilhamento -> mais 40 views

Mas o anúncio só pode ser compartilhado 4 vezes, sendo uma vez pela anunciante, de forma que o anuncio alcança no máximo a 4ª pessoa em sequencia (anunciante -> 1ª -> 2ª -> 3ª -> 4ª)

Na pasta Views, estão os 3 arquivos ejs:
index: a página inicial, onde estão os botões que levam para as paginas de cadastrar um novo anúncio  e de gerar relatórios. 
cadastro: nesta página há um form com os inputs necessários para cadastrar um anúncio e um botão para voltar a pagina inicial. Quando o form é submetido, o anuncioController já pega os dados do body, chama uma função da calculadora e insere no Banco de dados.
relatórios: nesta página é exibida, por meio de um forEach, uma lista dos anúncios com seus dados de alcance já calculados. 


## Status do Projeto 

Projeto concluído e entregue.

## Features

- [x] Cadastro de novo anúncio
- [x] Cálculo do alcance do anúncio
- [x] Exibição de anúncios
- [x] Exibição de relatórios dos anúncios
- [x] Navegação entre as páginas
- [x] Persistência dos dados
- [ ] Aplicação de filtros
- [ ] Realização de testes

## Demonstração 


## Pré-requisitos e como rodar a aplicação

O projeto foi feito em node.
Para executar o programa, é necessario ter instalado em sua máquina o Git e o Node.js.
Para clonar este repositório em sua máquina, execute o comamndo:

> git clone " *******************" ///-------------------------------------------------------------"

depois, é necessário instalar os pacotes necessários:

>npm install

Como o banco de dados é local, é preciso iniciá-lo na sua máquina.Criei um script para isso:

>npm run init-bd

Por fim, para rodar o projeto:

>npm start

O servidor iniciará na porta 3000, acesse <http://localhost:3000>


## Tecnologias utilizadas

- nodeJS 
- sqlite
- JavaScript
- CSS
- Git


## Autora
<h1> <img width=100px src= "public/foto.png" ></h1>

Alice de Fátima Moraes Souza

github: https://github.com/alicefms

linkedIn: https://www.linkedin.com/in/alice-moraes-189810101/

