## NOTES FOR THIS PROJECT

This project is about an API built using <strong>NodeJs</strong>, <strong>Typescript</strong>, <strong>Docker</strong>, <strong>MongoDB</strong>.

## Quickstart

Start by following these terminal commands:

Após realizar as configurações iniciais do projeto <strong>Nodejs + Typescript</strong>, foi configurado o lint a ser utilizado.

Em seguida, foi definido que o banco de dados a ser utilizado serio o <strong>MongoDB</strong>, o qual foi configurado a partir de um <strong>Docker Container</strong>.

Com o Docker já instalado, para configurá-lo iniciar a manipulação de dados com <strong>Mongodb</strong>, basta rodar os comandos a seguir:

	docker run --name mongo -p 27017:27017 -d mongo
	yarn add mongoose

Para lidar com uploads de imagens, foi utilizado o formato de requisição multiform, bem como a utilização do <strong>multer</strong>


