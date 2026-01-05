FROM node:18-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /app

COPY package*.json ./

RUN npm install && chown -R node:node /app

RUN npm install

COPY . .

RUN chmod +x db/migrate.sh && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["sh", "-c", "db/migrate.sh && node src/server.js"]