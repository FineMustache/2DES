-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex3-motoristas.csv'
INTO TABLE motoristas
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from motoristas;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex3-telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex3-linhas.csv'
INTO TABLE linhas
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from linhas;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex3-horarios.csv'
INTO TABLE horarios
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from horarios;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Documents/2DES - Guilherme Mendes/bcd/Aula5/csv/ex3-mot_linha.csv'
INTO TABLE mot_linha
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from mot_linha;

