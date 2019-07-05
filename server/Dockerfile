FROM node:8-alpine

RUN mkdir /kserver 

WORKDIR /kserver

COPY package.json /kserver

RUN npm install --production

COPY . /kserver

EXPOSE 3000

CMD [ "npm", "start" ]



