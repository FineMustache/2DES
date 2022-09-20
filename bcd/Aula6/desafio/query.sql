drop database if exists emprestimos;
create database emprestimos charset=UTF8 collate utf8_general_ci;
use emprestimos;

-- DDL Criação da estrutura do Banco de Dados

create table clientes(
    cpf VARCHAR(12) not null primary key,
    pri_nome varchar(25) not null,
    sobrenome varchar(50) not null,
    cep varchar(9) not null,
    complemento varchar(30) not null
);

CREATE TABLE telefones(
    cpf_cli VARCHAR(12) NOT NULL,
    tipo varchar(8) not null,
    numero varchar(15) not null,
    FOREIGN KEY (cpf_cli) REFERENCES clientes(cpf)
);

CREATE TABLE emprestimos(
    id integer NOT NULL PRIMARY KEY auto_increment,
    cpf_cli varchar(12) not null,
    data DATE not null,
    capital float(8,2) not null,
    n_parcelas integer not null,
    taxa_juros float(5,2) not null,
    imposto float(8,2) not null,
    FOREIGN KEY (cpf_cli) REFERENCES clientes(cpf)
);

CREATE TABLE parcelas(
    id integer not null PRIMARY KEY auto_increment,
    vencimento DATE not null,
    pagamento DATE,
    valor float(7,2) NOT NULL,
    val_recebido float(5,2),
    id_emp integer not null,
    FOREIGN KEY (id_emp) REFERENCES emprestimos(id)
);

DELIMITER $

CREATE PROCEDURE Parcelas_FE(
    data_emp DATE,
    capital float(7,2),
    id_emp integer,
    n_parcelas integer,
    taxa_juros float(5,2),
    imposto float(8,2)
)
BEGIN
    DECLARE n INT;
    DECLARE data_venc DATE;
    DECLARE valor float(7,2);
    DECLARE montante float(9,2);
    DECLARE juros_totais float(9,2);

    SET n = n_parcelas;
    SET data_venc = data_emp;   

    SET valor = capital / n_parcelas;
    SET montante = 0;
    loop_label: LOOP
        IF n < 1 THEN
            LEAVE loop_label;
        END IF;

        SET valor = (valor * (taxa_juros / 100));
        SET montante = montante + valor;
        SET n = n - 1;

    END LOOP;

    SET n = n_parcelas;
    loop_label2: LOOP
        IF n < 1 THEN
            LEAVE loop_label2;
        END IF;

        SET valor = montante / n_parcelas;

        SET data_venc = DATE_ADD(data_venc, INTERVAL 1 MONTH);

        INSERT INTO parcelas VALUES(
            DEFAULT,
            data_venc,
            null,
            valor,
            null,
            id_emp
        );

        SET n = n - 1;

    END LOOP;
END$

CREATE TRIGGER Insert_Parcela AFTER INSERT
ON emprestimos
FOR EACH ROW
BEGIN
   CALL Parcelas_FE(
    NEW.data,
    NEW.capital,
    NEW.id,
    NEW.n_parcelas,
    NEW.taxa_juros,
    NEW.imposto
   );
END$

DELIMITER ;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/desafio/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/desafio/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula6/desafio/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

describe clientes;
describe telefones;
describe parcelas;
describe emprestimos;

show tables;

