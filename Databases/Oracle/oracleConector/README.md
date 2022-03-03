# Conectando Oracle no NIFI

Foi utilizado este tutorial [Oracle 19.3c - Docker](https://github.com/steveswinsburg/oracle19c-docker) para criar uma imagem do **Oracle 19c**
em um container, apartir da image no Container fiz a conexão utilizando o **Dbeaver**(ferramenta de administração de banco de dados), criando
uma tabela teste e uma Procedure ao qual utilizamos no **NIFI**, desafio encontrado foi na hora de fazer a conexão dentro do NIFI fazendo a conexão
do conection pool com o processor QueryDatabaseTableRecord, mesmo conectando com localhost no Dbeaver, no processor do NIFI ele só aceitou usar
o ip real do docker, depois que mudei pediu para conectar com um usuario nao sysdba e conexão bem sucedida.
