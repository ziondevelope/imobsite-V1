FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Compilar a aplicação
RUN npm run build

# Imagem de produção
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar apenas arquivos necessários para a produção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Expor a porta
EXPOSE 5000

# Definir variáveis de ambiente
ENV NODE_ENV=production

# Iniciar a aplicação
CMD ["node", "dist/index.js"]