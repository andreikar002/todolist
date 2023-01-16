FROM node:16-alpine
WORKDIR /server
COPY . ./
RUN npm i
EXPOSE 8000
ENTRYPOINT [ "node", "server.js" ]