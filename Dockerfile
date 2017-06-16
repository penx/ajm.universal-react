# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# https://github.com/docker/docker/issues/30110
FROM node:7.10.0

ENV NODE_ENV production
ENV HOME=/usr/src/app

RUN mkdir -p /usr/src/app
WORKDIR $HOME

# Install app dependencies
COPY package.json $HOME
RUN npm install --production

# Bundle app source
COPY . $HOME

EXPOSE 8080

CMD ["npm", "start"]
