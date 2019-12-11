FROM node:lts-alpine

RUN mkdir ~/pricestalker
WORKDIR ~/pricestalker
RUN mkdir dist

COPY . .

RUN ls
RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "server"]