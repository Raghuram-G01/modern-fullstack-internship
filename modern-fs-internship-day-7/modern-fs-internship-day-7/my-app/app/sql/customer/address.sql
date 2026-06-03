create table address(
    address_id serial primary key,
    address varchar(100) not null,
    city_id int references city(city_id) not null,
    postal_code int not null,
    phone varchar(20) not null
);

insert into address(address, city_id, postal_code, phone) 
values ('123 Main St', 1, 12345, '555-1234'), ('456 Elm St', 2, 67890, '555-5678');

select * from address;

-- drop table address;
