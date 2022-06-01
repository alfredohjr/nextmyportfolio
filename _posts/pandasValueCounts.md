---
title: value_counts
type: pandas
description: contando a frequência de itens com pandas
post_in: 2021-06-01
---

## Necessidade

Muitas vezes eu precisava contar a frequencia de certo valor em uma coluna, como tinha a ideia do select na cabeça, acabava executando um comando mais complexo que o necessário.

```
df.groupby(['coluna'])['valor'].count()
```

## A solução

Estava fazendo alguns cursos na [Alura](https://www.alura.com.br/), e nos primeiros cursos me foi apresentado a função value_counts, isso me ajudou muito em analises iniciais.

```
df.value_counts('coluna')
```

existe também a opção **normalize** ela traz a porcentagem da frequência, muito util também.

```
df.value_counts('coluna', normalize=True)
```

## Extra

Você pode gerar um novo dataframe com a frequência por quantidade e porcentagem

```
frequencia_quantidade = df.value_counts('coluna')
frequencia_porcentagem = df.value_counts('coluna', normalize=True)

pd.DataFrame({'Frequência':frequencia_quantidade,'Frequência (%)':frequencia_porcentagem})
```

## Referência

[Documentação oficial](https://pandas.pydata.org/docs/reference/api/pandas.Series.value_counts.html#:~:text=Return%20a%20Series%20containing%20counts,the%20most%20frequently%2Doccurring%20element.)