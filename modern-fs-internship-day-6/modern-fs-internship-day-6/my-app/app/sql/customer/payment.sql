create table payments(
    payment_id serial primary key,
    customer_id int references customers(customer_id),
    amount decimal(10, 2) not null,
    payment_mode varchar(20) not null,
    payment_date TIMESTAMP
);

insert into payments(customer_id, amount, payment_mode,payment_date) 
values (1, 100.00, 'Credit Card', NOW()), (2, 50.00, 'PayPal', NOW());

select * from payments;


insert into payments(customer_id, amount, payment_mode, payment_date)
values (2, 75.00, 'Debit Card', NOW());
-- delete from payments where payment_id = 7;

-- drop table payments;



-------------------------------
select c.customer_id, p.payment_id 
from customers c inner join payments p on c.customer_id = p.customer_id;

-------------------------------
select c.customer_id, p.payment_id
from customers c left join payments p on c.customer_id = p.customer_id;

---------------------------------

select c.customer_id, p.payment_id
from customers c right join payments p on c.customer_id = p.customer_id;

----------------------------------
select c.customer_id, p.payment_id
from customers c full outer join payments p on c.customer_id = p.customer_id;

------------------------------


select * from customers;
insert into payments(customer_id, amount, payment_mode, payment_date)
values (3, 150.00, 'Credit Card', NOW()), (4, 200.00, 'PayPal', NOW());


------------------------------
