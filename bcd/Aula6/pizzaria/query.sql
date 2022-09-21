drop database if exists pizzaria;
create database pizzaria charset=UTF8 collate utf8_general_ci;
use pizzaria;

-- DDL Criação da estrutura do Banco de Dados

create table cliente(
    cliente_id integer not null primary key auto_increment,
    telefone varchar(15) not null,
    nome varchar(30) not null,
    logradouro varchar(30) not null,
    numero float(5,0) not null,
    complemento varchar(30) not null,
    bairro varchar(30) not null,
    referencia varchar(30) NOT NULL
);

create table pizza(
    pizza_id integer not null primary key auto_increment,
    nome varchar(30) not null,
    descricao varchar(30) not null,
    valor float(5,2) not null
);

CREATE TABLE pedido(
    pedido_id integer not null primary key auto_increment,
    cliente_id integer not null,
    data DATETIME not null,
    valor float(5,2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);

CREATE TABLE item_pedido(
    pedido_id integer not null,
    pizza_id integer not null,
    quantidade float(2,0),
    valor decimal(5,2),
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (pizza_id) REFERENCES pizza(pizza_id)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/pizzaria/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/pizzaria/pizza.csv'
INTO TABLE pizza
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/pizzaria/pedido.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/pizzaria/item_pedido.csv'
INTO TABLE item_pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

describe cliente;
describe pizza;
describe pedido;
describe item_pedido;
show tables;

SELECT * FROM cliente;
SELECT * FROM pizza;
SELECT * FROM pedido;
SELECT * FROM item_pedido;