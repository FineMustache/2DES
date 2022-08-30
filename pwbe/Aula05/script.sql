DROP DATABASE IF EXISTS lojinha;
CREATE DATABASE lojinha CHARSET=utf8 COLLATE utf8_general_ci;

use lojinha;

CREATE TABLE produtos(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cod VARCHAR(10) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    qntd int NOT NULL,
    preco float(5, 2) NOT NULL
);

insert into produtos values (DEFAULT, 'CJ1234', 'Calça Jeans Super Confortável', 10, 90.00);
INSERT INTO produtos VALUES(DEFAULT, 'MO5214', 'Moletom Super Estiloso', 5, 60.00);