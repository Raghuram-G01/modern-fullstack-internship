create table customers(
    id serial primary key,
    name varchar(50) not null,
    product_id int references products(id)
);

insert into customers(name, product_id) 
values ('Alice', 1), ('Bob', 2);
select * from customers;