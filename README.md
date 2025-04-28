# Imóveis Exata

Site para imobiliária com tema escuro e funcionalidades completas para listagem e busca de imóveis.

## Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express
- **Containerização**: Docker

## Funcionalidades

- Design responsivo com tema escuro
- Listagem de propriedades com filtros
- Carrossel de imóveis em destaque
- Categorias de imóveis
- Detalhes de propriedades
- Seção de serviços, agentes e depoimentos

## Como Executar

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev
```

### Produção

```bash
# Construir o projeto
npm run build

# Iniciar em modo de produção
npm run start
```

### Docker

```bash
# Construir a imagem
docker build -t imoveis-exata-app .

# Executar o container
docker run -p 5000:5000 imoveis-exata-app
```

## Deploy com EasyPanel

O projeto está configurado para deploy no EasyPanel. Consulte o arquivo `.easypanel/app.yml` para mais detalhes.

## Estrutura do Projeto

- `client/`: Código fonte do frontend React
- `server/`: Código fonte do backend Express
- `shared/`: Tipos e schemas compartilhados
- `dist/`: Arquivos de build (gerados)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.