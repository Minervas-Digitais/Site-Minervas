# 🚀 Site-Minerv@s Digitais

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
## 📋 Índice
* [Descrição](#-descrição)
* [Tecnologias Utilizadas](#-tecnologias-gerais-utilizadas)
* [Estrutura de Pastas](#-estrutura-de-pastas-do-projeto)
* [Desenvolvimento e Instalação](#-desenvolvimento-e-instalação)
* [Links Úteis](#-links-úteis)
* [Licença](#-licença)
* [Guia Rápido](#-guia-rápido:-subindo-um-commit-local-para-o-github)

---

## 📄 Descrição
Projeto de Extensão da UFRJ tem como objetivo de fomentar a presença feminina no meio tecnológico. A proposta do desenvolvimento do site do Projeto busca promover um ambiente online de divulgação e disseminação do projeto para a comunidade.

## 💻 Tecnologias Gerais Utilizadas
* NodeJS
* HTML
* CSS / SCSS
* JavaScript
* Git (para controle de versão)
* GitHub (para hospedagem e colaboração)

## 📁 Estrutura de Pastas do Projeto

```
site-minervas/
├── src/
│   ├── assets/                  # Imagens e recursos visuais
│   ├── components/              # Componentes reutilizáveis para as telas
│   │   ├── Actions/
│   │   ├── Contact/
│   │   ├── Content/
│   │   ├── Events/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Motivation/
│   │   ├── net/
│   │   ├── Outras-iniciativas/
│   │   ├── Partners/
│   │   └── Who/
│   ├── pages/                   # Páginas principais do site
│   │   ├── Actions.jsx          # Página de Ações
│   │   ├── Home.jsx             # Página Principal
│   │   └── Sobre.jsx            # Página Sobre
│   └── App.jsx                  # Componente raiz
```

## 🛠️ Desenvolvimento e Instalação
a) Antes de começar, é necessário ter instalado em sua máquina: 
* React 18+
* Node.js 16+
* NPM para gerenciamento de dependências (instalação de libs)

b) Siga os passos abaixo para configurar o ambiente de desenvolvimento e executar o projeto:


1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Minervas-Digitais/Site-Minervas.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Site-Minervas/site-minervas        #sim é assim mesmo, rs.
    ```
3.  **Mude para a branch principal de desenvolvimento:** 
    ```bash
    git checkout develop 
    ```
4.  **Atualize as dependências utilizadas no projeto:** 
    ```bash
    npm install 
    ```
5.  **Sirva o projeto:** 
    ```bash
    npm start                           # o projeto abrirá em seu navegador (Ex: localhost:3000)
    ```

## 🔗 Links Úteis
1.  Protótipo: [Figma - dev](https://www.figma.com/design/qy0BmLyta8BGv9g0P3I2EK/Site-Minerv-s?node-id=0-1&m=dev&t=CXpro9HeO4sWrtZD-1).

## 📝 Licença
Este projeto está sob a licença [Minerv@s Digitais UFRJ © 2024 - Todos os direitos reservados](https://ic.ufrj.br/~minervas/).

##

# Guia Rápido: Subindo um commit Local para o GitHub 🚀

### 1. Adicione os Arquivos que foram alterados

Diga ao Git para começar a rastrear todos os seus arquivos:

```bash
git add .
```

### 2. Faça o Commit referente ao seu envio para o Repositório

Salve, com uma mensagem clara, seguindo o padrão de mensagens disponibilizados abaixo:

```bash
(Features):             git commit -m "feat: mensagem desejada."
(Refatorações):         git commit -m "refactor: mensagem desejada."
(Correções):            git commit -m "fix: mensagem desejada."
(documentações):        git commit -m "docs: mensagem desejada."
```

### 3. Envie os arquivos alterados para a Nuvem (Repositório)

Envie o commit do seu repositório local para o GitHub:

```bash
git push origin [nome da branch em que foi realizada a alteração]
```
