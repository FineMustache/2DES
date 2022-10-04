drop database if exists patrimonio;
create database patrimonio charset=UTF8 collate utf8_general_ci;
use patrimonio;

CREATE TABLE itens(
    ni numeric(6) NOT NULL,
    aquisicao timestamp NOT NULL,
    denominacao VARCHAR(100) NOT NULL,
    valor float(10,2) NOT NULL,
    img VARCHAR(200) DEFAULT "default.png",
    CONSTRAINT pk_item PRIMARY KEY (ni)
);

DESCRIBE itens;

LOAD DATA INFILE "C:/Users/des/Documents/2DES/pwbe/Aula09/banco/itens.csv"
INTO TABLE itens
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM itens;