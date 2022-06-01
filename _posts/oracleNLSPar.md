---
title: Parâmetro NLS
type: Oracle
description: Alterando separadores de milhar e decimal no Oracle
post_in: 2021-05-31
---

## Necessidade

Muitas vezes era necessário exportar dados executando consultas diretamente no banco de dados,
quase sempre os separadores de milhar e decimal estavam no padrão americano(,.) depois que você abre o arquivo exportado no excel o problema aparece, os valores ficam todos bagunçados.

## Como corrigir?

Para corrigir isso execute o seguinte comando após abrir a conexão com o banco de dados.

```
alter session set NLS_NUMERIC_CHARACTERS='.,';
```

Você deve executar esse comando toda vez que abrir a sessão no banco da dados.

## Referência

[Parâmetros de Sessão alterando NLS da Conexão - CooperaTI](http://cooperati.com.br/2013/05/08/oracle-parmetros-de-sesso-alterando-nls-da-conexo/)