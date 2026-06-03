create table customers(
    customer_id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address_id int references address(address_id)
);

insert into customers(first_name, last_name, address_id) 
values ('John', 'Doe', 1), ('Jane', 'Smith', 2);
insert into customers(first_name, last_name, address_id)
values ('Alice', 'Johnson', 1), ('Bob', 'Brown', 2);
select * from customers;

-- delete from customers where customer_id = 4;

