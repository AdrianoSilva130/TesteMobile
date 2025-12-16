📱 Testes Mobile Automatizados – Appium + WDIO
📌 Visão Geral

Este repositório contém um projeto de automação de testes mobile, desenvolvido para validar funcionalidades de um aplicativo Android utilizando Appium em conjunto com WebdriverIO (WDIO).

O projeto demonstra conhecimento prático em testes mobile automatizados, uso de dados dinâmicos com FakerJS, aplicação do Page Object Model e geração de relatórios profissionais com Allure.

🎯 Objetivo do Projeto

Automatizar testes funcionais em aplicativo mobile

Validar fluxos críticos do app

Reduzir testes manuais repetitivos

Gerar relatórios claros e profissionais

Demonstrar domínio de ferramentas modernas de automação mobile

💡 Tecnologias e Ferramentas Utilizadas
🧠 Linguagem

JavaScript (Node.js)

📱 Automação Mobile

Appium (v2.x) – Automação de aplicações mobile

WebdriverIO (WDIO) – Framework de automação

Android Emulator / Device físico

🧪 Testes

Testes funcionais mobile

Cenários positivos e negativos

Validação de telas, elementos e fluxos

🔀 Dados Dinâmicos

FakerJS – Geração de dados de teste (nome, e-mail, senha, etc.)

📊 Relatórios

Allure Report – Visualização gráfica dos resultados

Allure Results – Armazenamento dos dados de execução

Evidências claras para análise de falhas

⚙️ Infraestrutura

npm – Gerenciamento de dependências

Appium Inspector – Inspeção de elementos

Git / GitHub – Versionamento de código

🚀 Como Executar o Projeto
🔹 Pré-Requisitos

✔️ Node.js (v16 ou superior)
✔️ npm
✔️ Java (JDK)
✔️ Appium (v2.x)
✔️ Android Studio (Emulador configurado)
✔️ Allure Commandline

Verificar Appium:

appium -v


Instalar Allure:

npm install -g allure-commandline

🔹 Instalação do Projeto
git clone https://github.com/AdrianoSilva130/TesteMobile.git
cd TesteMobile
npm install

🔹 Iniciar o Appium Server
appium


O Appium deve estar rodando antes de executar os testes.

🔹 Executar os Testes Mobile
npx wdio run wdio.conf.js


Ou, se existir script configurado:

npm test

📊 Gerar e Visualizar Relatórios Allure

Após a execução dos testes, os resultados são salvos na pasta:

allure-results/


Para gerar e abrir o relatório:

allure generate allure-results --clean
allure open


✔️ O relatório exibe:

Testes aprovados e reprovados

Tempo de execução

Evidências de falhas

Histórico de execuções

📁 Estrutura do Projeto
├── test/
│   ├── specs/               # Casos de teste mobile
│   └── pageobjects/         # Page Objects
├── allure-results/          # Resultados das execuções
├── wdio.conf.js             # Configuração do WDIO
├── package.json             # Dependências e scripts
└── README.md                # Documentação

🧪 Exemplos de Cenários Automatizados

Cadastro de usuário com dados dinâmicos

Login no aplicativo

Preenchimento de formulários

Validação de mensagens e telas

Tratamento de cenários negativos

🧠 Competências Demonstradas

✔️ Automação de testes mobile
✔️ Uso de Appium + WebdriverIO
✔️ Geração de dados com FakerJS
✔️ Relatórios profissionais com Allure
✔️ Organização com Page Object Model
✔️ Testes funcionais em Android
✔️ Boas práticas de QA
