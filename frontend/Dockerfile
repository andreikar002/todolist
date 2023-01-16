FROM node:16-alpine

ENV APP_ROOT /todolist

ARG API_URL
ENV API_URL ${API_URL}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm i
RUN npm run build

CMD ["npm", "run", "dev"]