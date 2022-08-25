drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

-- DDL Criação da estrutura do Banco de Dados

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table telefones(
    id_cliente integer not null,
    numero varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe telefones;
describe clientes;
show tables;

-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex1-clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex1-telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

create view vw_clientes as
select c.id_cliente, c.nome, c.nascimento, c.sexo, c.peso, t.numero as telefone from clientes c
inner join telefones t
on c.id_cliente = t.id_cliente;

select * from vw_clientes;