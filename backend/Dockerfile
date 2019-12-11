FROM node:lts-alpine

RUN mkdir ~/pricestalker
WORKDIR ~/pricestalker
RUN mkdir dist

COPY package.json .
COPY src/ ./src
COPY .env .

RUN ls
RUN yarn
RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]