---
title: pandas
type: Artigo
description: uma biblioteca feita em python para analise de dados.
post_in: 2021-04-03
---

## Definição

em [wikipedia](https://pt.wikipedia.org/wiki/Pandas_(software))

Em programação de computadores, pandas é uma biblioteca de software criada para a linguagem Python para manipulação e análise de dados. Em particular, oferece estruturas e operações para manipular tabelas numéricas e séries temporais. É software livre sob a licensa licença BSD. O nome é derivado do termo inglês "panel data"(dados em painel), um termo usado em estatística e econometria para conjunto de dados que incluem várias unidades amostrais (indivíduos, empresas, etc) acompanhadas ao longo do tempo.

em [pandas.pydata.org](https://pandas.pydata.org/)

pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool,
built on top of the Python programming language.

## Eu uso para

1. Ler dados de banco de dados.
2. Ler/Salvar arquivos em excel. 
3. Automação de processos.
4. Envio de relatório.

Antes de começar, aconselho a usar um ambiente separado de python, se não sabe o que é isso leia este [link](/blog/virtualenv).

Aconselho também a usar os notebooks Jupyter, pode usar o [Google colab](https://colab.research.google.com) ou o [Jupyter anaconda](https://jupyter.org/install).

para instalar(pelo terminal):
```terminal
pip install pandas
```

importando a lib:
> "import pandas as pd" é uma convenção entre os usuarios da ferramenta.
```python
import pandas as pd
```

importando os dados de um .csv para dentro de um dataframe(objeto padrão do pandas):
> Alguns arquivos podem dar erro de codificação, se der, utilize a opção encoding='latin1', encoding='iso-8859-1' ou encoding='cp1252'.
```python
import pandas as pd
df = pd.red_csv('/tmp/ex.csv')
# se der erro de codificação:
df = pd.read_csv('/tmp/ex.csv'
    ,encoding='latin1')
```

importando arquivos em excel:
```python
import pandas as pd
df = pd.read_excel('/tmp/ex.xlsx')
# lendo uma planilha em especifico
df = pd.read_excel('/tmp/ex.xlsx'
    ,sheet_name='data_example')
```

lendo arquivo de um banco de dados:
> o sqlite3 é nativo no python.
```python
import pandas as pd
import sqlite3

# cria a conexão com o banco de dados
con = sqlite3.connect('/tmp/db.sqlite3')

# sql que será executado.
sql = 'select * from employees'

# recuperando dados do banco
df = pd.read_sql(sql,con=con)
```