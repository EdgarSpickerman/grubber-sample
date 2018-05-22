drop database if exists database_developement;
create database database_developement;
use database_developement;

create table meals(
  id int not null auto_increment,
  name varchar(255) not null,
  primary key (id)
);