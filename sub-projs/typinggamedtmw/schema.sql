create database typeddb;

use typeddb;

CREATE TABLE users(
    username varchar(40) PRIMARY KEY NOT NULL, 
    passkey varchar(40) NOT NULL, 
    date_of_registr date NOT NULL,
    sec_ques_1 varchar(30), 
    sec_ques_2 varchar(30)
);

CREATE TABLE words(
    sn int PRIMARY KEY NOT NULL,
    word varchar(25)
);


CREATE TABLE top_twenty(
    username varchar(40) NOT NULL,
    score int NOT NULL,
    date_of_score date NOT NULL
);