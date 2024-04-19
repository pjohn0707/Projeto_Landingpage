create database SFOOD;
use SFOOD;
 
create table clientes (
	id INT NOT NULL PRIMARY KEY auto_increment,
    name varchar(255),
    email varchar(255) UNIQUE NOT NULL
);
 
desc clientes;
 
select * from clientes;
 
insert into clientes(name,email) 
values ("Neymar","Neygostoso@gmail.com");