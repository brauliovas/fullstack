FROM alpine:latest

RUN apk update && \
    apk add --no-cache nodejs npm

WORKDIR  /app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 5500

CMD ["node", "index.js"]

