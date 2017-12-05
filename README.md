# Cupify
Container Docker rodando uma microaplicação para sorteio dos grupos da Copa de 2018

## Utilização
TODOS OS COMANDOS PRECISAM SER REALIZADOS EM MODO ROOT

### Clone e entre no repositório
### Faça o build da imagem
```docker build -t cupify .```
### Rode o servidor
```docker run --name cupify -p 49160:3000 -d cupify```
### Verifique se o container está ativo
```docker ps```
### Acesse o servidor
```http://localhost:49160/```
### Rode o cliente
```docker exec -it cupify bash -c "cd client && npm install && npm start"```
### Acesse o cliente com o ip dado em "On Your Network:" do cmd
```Ex: http://127.0.0.1:3001/```

