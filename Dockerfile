FROM registry.eyexpo.org:5000/nodebase:12.13.0

WORKDIR app

COPY . .

ENV NPM_CONFIG_LOGLEVEL silent

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

RUN apk --update add rsync 

RUN npm install --production


CMD ["sh", "-c", "pm2-runtime start ecosystem.config.js --watch --env $NODE_ENV"]
