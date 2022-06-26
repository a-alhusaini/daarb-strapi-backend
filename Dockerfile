FROM node:16

WORKDIR /usr/src/app/

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD [ "npm", "run","start" ]
