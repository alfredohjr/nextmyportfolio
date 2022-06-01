---
title: Argparse
type: python
description: Dando mais opções para os seus scripts com o argparse
post_in: 2022-06-02
---

## Necessidade

Não há como negar que eu crio scripts, para tudo que se torna repetitivo eu tento criar scripts, e o python vem me ajudando muito nessa tarefa. O problema é quando você começa a criar varios scripts com pequenas variações para executar algo "exclusivo", se um der bug, você precisa alterar todo o restante também, meio chato isso!

## o que o Argparse faz?

Com o argparse, você pode criar um script/programa que receba parâmetros na linha de comando, com isso é necessário apenas chamar o script e passar algumas coisinhas a mais, algo muito semelhante com o `rm -rf /tmp` (é só um exemplo! não execute se não souber o que exatamente o comando faz) do linux.

## Exemplo

Uma simples implementação do rm(linux) ou del(windows) em python

```
import argparse
import os

parser = argparse.ArgumentParser()
parser.add_argument('-d', '--diretorio', help='diretorio a se excluir os dados.')

args = parser.parse_args()
if args.diretorio:
    for arquivo in os.listdir(args.diretorio):
        os.remove(f'{args.diretorio}/{arquivo}')
```

### Para executar:

```
python my_remove.py -d /tmp
```

## Referência

[Documentação oficial](https://docs.python.org/3/library/argparse.html)