FROM node:18-alpine
RUN apk add --no-cache postgresql-client

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x db/migrate.sh

EXPOSE 3000

CMD ["sh", "-c", "db/migrate.sh && node src/server.js"]