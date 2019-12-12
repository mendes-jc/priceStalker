FROM node:lts-alpine

RUN mkdir /pricestalker
WORKDIR /pricestalker
RUN mkdir build

COPY . .

RUN ls
RUN yarn

EXPOSE 3333

CMD ["yarn", "start"]