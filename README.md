### NOTES FOR THIS PROJECT

Após realizar as configurações iniciais do projeto node + ts, foi configurado o lint a ser utilizado.

Em seguida, foi definido que o banco de dados a ser utilizado serio o MongoDB, o qual foi configurado a partir de um Docker Container.

Com o Docker já instalado, para configurá-lo iniciar a manipulação de dados com mongodb, basta rodar os comandos a seguir:

	docker run --name mongo -p 27017:27017 -d mongo
	yarn add mongoose

