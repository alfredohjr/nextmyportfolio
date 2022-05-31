---
title: Minha newsletter
type: Auto
description: Como criei a minha newsletter usando o Gmail + Sheets e Apps scripts, totalmente de graça
post_in: 2021-05-30
---

## Necessidade

Tudo começa com a facilidade de receber informações inúteis no dia a dia, isso inclui redes sociais e propagandas no email, na contramão disso estão as informações úteis, no meu caso assuntos relacionados a tecnologia, pode ser artigo, blog, podcast e etc; já sabia da possibilidade de criar algumas automações com a Google, lendo planilhas, enviando emails e mais algumas possiblidades, com isso em mãos, comecei a pensar de que forma poderia usar isso ao meu favor.

Estou fazendo alguns cursos na [Alura](https://www.alura.com.br/), e sempre existe algum conteúdo extra nos cursos, e gostaria de ve-los de forma recorrente, mas sem precisar controlar isso agendando ou adiando o email, já que são muitos links, prints a se controlar e isso certamente iria me cansar num certo momento.

## Eureca

Eu já sabia a minha dor, faltava resolve-la! foi então que uma ideia começou a se formar, não nesta ordem exatamente, mas já sabia que o Apps scripts tinha algumas capacidades:
1. Era possível filtrar emails e fazer algumas coisas...
2. Era possível ler e inserir dados na planilha, já tinha o meu pequeno banco da dados.
Mas eu ainda precisava saber se o Apps scripts podia fazer:
1. Encontrar emails por marcadores.
2. Pegar um ID do email, para usar como controle na planilha.
3. Pegar determinado email e me responder automaticamente.
Para a minha sorte(nesse momento eu já estava enviando os links, prints e tudo mais no meu email) os 3 pontos eram possíveis, UFA!!!
Nesse ponto eu também já havia criado a label Rever, os emails já estavam marcados e arquivados.

## O Script

comecei criando uma nova planilha no drive, com ela vazia, acessei a parte de scripts em: **Extensões -> Apps Scripts** e comecei a construção do script.

**Comentei o código para facilitar.**

```
function readRever(label, column, count) {

  // Pega a planilha atual e joga para uma variável
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Faz a leitura da coluna indicada
  var AAList = sheet.getRange(`${column}:${column}`).getValues();

  // Faz a limpeza da coluna, há alguns dados vazios
  // Acredito que possa ter uma saída melhor para esse caso, mas até o momento não achei.
  var AAListNew = [];
  for(i=0; i < AAList.length; i++){
    if(AAList[i][0] != ''){
      AAListNew.push(AAList[i][0]);
    }
  }
  
  // Procura por emails com a label informada 
  var emails = GmailApp.search(`label:${label}`).reverse();

  // Caso o banco de dados esteja cheio, ou seja, não existe um novo email a enviar
  // ele apaga todos os IDs de email
  if(emails.length === AAListNew.length){
    for(i=0; i<AAListNew.length; i++){
      console.log(`${column}${i}`);
      var cell = sheet.getRange(`${column}${i+1}`);
      cell.setValue('');
    }
    return 0;
  }

  // Percorre os emails com a label informada
  var count1 = 0;
  for(i=0; i <= emails.length; i++){
    email = emails[i];

    try{
      var emailID = email.getId();
    } catch {break;}

    // Verifica se o email não está na caixa de entrada e se não existe no planilha
    if((email.isInInbox() === false) & (AAListNew.includes(emailID) === false)){
      // Faz o envio do email
      email.reply('Ola');
      
      // escreve o ID do email enviado na planilha, para não enviar novamente
      var cell = sheet.getRange(`${column}${AAListNew.length+count1+1}`);
      cell.setValue(emailID);
      count1 += 1;
    }

    // um controle de quantos emails com a label informada deve ser enviada. 
    if(count1 >= count) {break};
  }
}

function main(){
  // Chamando a função, indicando a label, a coluna de controle e
  // a quantidade que deve ser enviada.
  readRever(label="Rever", column="A", count=2);
}
```

Depois disso, é necessário criar um acionador, para tal, ainda na tela do Apps Scripts. vá no icone do relógio no menu esquerdo.
* Na próxima tela, clique em "Adicionar acionador".
* Na opção que vai abrir, vá até o campo "Escolha a função que será executada" e altere para a função "main".
* Na opção "Selecione a origem do evento" coloque "Baseado no tempo".
* Na opção "Selecione o tipo de acionador com base no tempo" coloque "Contador de dias"
* E por último a opção "Selecione a hora do dia" coloque "6h às 7h".
* Clique em salvar.
Com essa configuração, você irá receber todos os dias as 07:00, 2 emails com a label, nunca repetindo o que já foi enviado.
Você pode alterar o acionador conforme a sua necessidade.

## Para finalizar!

Com esse script, ganhei algumas horas do meu dia! e consigo manter o meu conhecimento mais fresco, visto que de tempos e tempos o assunto é refrescado na minha mente. O script foi melhorado algumas vezes, confesso que peguei alguns bugs(gerados e corrigidos por mim mesmo), essa versão é a que uso já faz uns 2 meses, criei outras labels também, então recebo mais alguns emails durante o dia.
