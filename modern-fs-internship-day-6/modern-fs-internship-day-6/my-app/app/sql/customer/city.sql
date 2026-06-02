create table city(
    city_id serial primary key,
    city_name varchar(50) not null
);

insert into city(city_name) values ('New York'), ('Los Angeles');
select * from city;

-- drop table country;