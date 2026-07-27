FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# submissions.json gets written here — make sure it survives container restarts
RUN mkdir -p /app/data

ENV PORT=4000
EXPOSE 4000

CMD ["node", "index.js"]
