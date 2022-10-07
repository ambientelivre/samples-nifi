# Monitoramento de erros com Nifi

Nesse repositório estão uma solução para o monitoramento de falhas do Nifi de forma dinâmica.
Foi usado como banco de dados o MySQL com a base de dados Sakila.
Para o projeto foram usados conceitos de Bulleting e Data Provenance.
Para gerar logs em tempo real e com histórico dos processos realizados foram utilizados alguns script desenvolvidos em JavaScript.

O resultado final do fluxo desenvolvido gera dois logs diferentes:
- Um log individual por tabela existente no banco de dados com informações sobre cada processo que ela passou e se houveram erros.
- Um log com todas as tabelas que finalizaram o fluxo sem erros

