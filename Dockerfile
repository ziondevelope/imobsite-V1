FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar todas as dependências (incluindo as de desenvolvimento)
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

# Instalar todas as dependências para garantir que nada falte em produção
RUN npm ci

# Expor a porta
EXPOSE 5000

# Definir variáveis de ambiente
ENV NODE_ENV=production

# Iniciar a aplicação
CMD ["node", "dist/index.js"]