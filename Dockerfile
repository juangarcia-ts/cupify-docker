FROM node:carbon

WORKDIR /usr/src/app

COPY ./cupify/package*.json ./

RUN npm install

COPY ./cupify .

EXPOSE 8080

CMD [ "npm", "start" ]