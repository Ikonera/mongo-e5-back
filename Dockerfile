FROM node:lts-gallium

LABEL author="Ikonera <gabrielmlt@protonmail.ch>"

COPY package.json  /app/
COPY yarn.lock /app/
COPY . /app/

WORKDIR /app

RUN yarn
RUN yarn build

EXPOSE 4600

CMD ["yarn", "start:prod"]
