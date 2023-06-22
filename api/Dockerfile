FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN chown -R node:node prisma
RUN chmod 755 prisma
RUN npm install
# RUN npm run build

RUN npx prisma generate

EXPOSE 3001
CMD npm run dev