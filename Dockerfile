FROM node:latest

WORKDIR /kserver

COPY package.json /kserver

RUN npm install

COPY . /kserver

EXPOSE 3000

CMD [ "npm", "start" ]



