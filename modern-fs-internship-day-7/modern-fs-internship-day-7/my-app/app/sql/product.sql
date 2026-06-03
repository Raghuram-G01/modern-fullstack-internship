create table products(
    id serial primary key,
    name varchar(50) not null,
    price numeric(10, 2) not null
);

insert into products(name, price) 
values ('Laptop', 999.99), ('Smartphone', 499.99);
select * from products;