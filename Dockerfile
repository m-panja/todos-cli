
FROM node:20.3.0-alpine
LABEL TodoImageVersion=1.0.0
WORKDIR /usr/app
COPY package.json .
RUN npm install -f

COPY . .

EXPOSE 3000
