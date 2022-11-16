### NOTES FOR THIS PROJECT

Após realizar as configurações iniciais do projeto node + ts, foi configurado o lint a ser utilizado e, em seguida, foi definido que o banco de dados a ser utilizado serio o MongoDB, o qual foi configurado a partir de um Docker Container -- para inicializar as configurações do doker, tendo o mesmo já instalado, basta rodar os comandos a seguir:

	docker run --name mongo -p 27017:27017 -d mongo
	yarn add mongoose

