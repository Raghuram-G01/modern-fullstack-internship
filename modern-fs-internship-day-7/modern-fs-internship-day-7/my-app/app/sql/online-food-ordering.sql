-- ONLINE FOOD ORDERING SYSTEM

-- 1. CUSTOMERS
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(255) NOT NULL
);

INSERT INTO customers(customer_name, phone, address)
VALUES
('Prince Benjamin', '9876543210', 'Trichy'),
('Nishanth', '9876543211', 'Karaikudi'),
('Pradeep', '9876543212', 'Thirunelveli'),
('Puviarasu', '9876543213', 'Pollachi');

select * from customers;

-- 2. RESTAURANTS
CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    opening_hours VARCHAR(50) NOT NULL,
    closing_hours VARCHAR(50) NOT NULL
);

INSERT INTO restaurants
(restaurant_name, location, opening_hours, closing_hours)
VALUES
('A2B', 'Chennai', '08:00 AM', '10:00 PM'),
('Dominos', 'Coimbatore', '10:00 AM', '11:00 PM'),
('KFC', 'Salem', '09:00 AM', '10:30 PM');

select * from restaurants;

-- 3. MENU ITEMS
CREATE TABLE menu_items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    restaurant_id INT NOT NULL,

    FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(restaurant_id)
);

INSERT INTO menu_items
(item_name, price, restaurant_id)
VALUES
('Idli', 40, 1),
('Dosa', 80, 1),
('Veg Pizza', 250, 2),
('Garlic Bread', 120, 2),
('Chicken Burger', 180, 3),
('Chicken Bucket', 650, 3);

select * from menu_items;

-- 4. DELIVERY PERSONS
CREATE TABLE delivery_person (
    delivery_person_id SERIAL PRIMARY KEY,
    partner_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    vehicle VARCHAR(50) NOT NULL
);

INSERT INTO delivery_person
(partner_name, phone, vehicle)
VALUES
('Arun', '9001111111', 'Bike'),
('Vijay', '9002222222', 'Scooter'),
('Kumar', '9003333333', 'Bike');

select * from delivery_person;

-- 5. ORDERS
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    delivery_person_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    total_price INT NOT NULL,
    status VARCHAR(50) NOT NULL,

    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id),

    FOREIGN KEY (delivery_person_id)
    REFERENCES delivery_person(delivery_person_id),

    FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(restaurant_id)
);

INSERT INTO orders
(customer_id, delivery_person_id, restaurant_id,
 total_price, status)
VALUES
(1, 1, 1, 160, 'Delivered'),
(2, 2, 2, 250, 'Preparing'),
(3, 3, 3, 360, 'Delivered'),
(4, 1, 1, 120, 'Out for Delivery');

select * from orders;

-- 6. ORDER ITEMS
CREATE TABLE order_items (
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,

    PRIMARY KEY (order_id, item_id),

    FOREIGN KEY (order_id)
    REFERENCES orders(order_id),

    FOREIGN KEY (item_id)
    REFERENCES menu_items(item_id)
);

INSERT INTO order_items
(order_id, item_id, quantity)
VALUES
(1, 2, 2),
(2, 3, 1),
(3, 5, 2),
(4, 1, 3);

select * from order_items;

-- 7. PAYMENTS
CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_id INT NOT NULL,
    mode VARCHAR(50) NOT NULL,
    amount INT NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id),

    FOREIGN KEY (order_id)
    REFERENCES orders(order_id)
);

INSERT INTO payments
(customer_id, order_id, mode, amount)
VALUES
(1, 1, 'UPI', 160),
(2, 2, 'Card', 250),
(3, 3, 'Cash', 360),
(4, 4, 'UPI', 120);

select * from payments;




SELECT * FROM customers;
SELECT * FROM restaurants;
SELECT * FROM menu_items;
SELECT * FROM delivery_person;
SELECT * FROM orders;
SELECT * FROM order_items;
SELECT * FROM payments;

SELECT
    c.customer_name,
    r.restaurant_name,
    m.item_name,
    oi.quantity,
    o.total_price,
    o.status,
    d.partner_name AS delivery_partner,
    p.mode AS payment_mode
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
JOIN restaurants r
    ON o.restaurant_id = r.restaurant_id
JOIN delivery_person d
    ON o.delivery_person_id = d.delivery_person_id
JOIN order_items oi
    ON o.order_id = oi.order_id
JOIN menu_items m
    ON oi.item_id = m.item_id
JOIN payments p
    ON o.order_id = p.order_id;




-- =============================================================


-- -- customer table
-- CREATE TABLE customers (
--     customer_id SERIAL PRIMARY KEY,
--     customer_name VARCHAR(100) NOT NULL,
--     phone VARCHAR(15) NOT NULL,
--     address VARCHAR(255) NOT NULL
-- );

-- create table restaurants (
--     restaurant_id SERIAL PRIMARY KEY,
--     restaurant_name VARCHAR(100) NOT NULL,
--     location VARCHAR(255) NOT NULL,
--     opening_hours VARCHAR(50) NOT NULL,
--     closing_hours VARCHAR(50) NOT NULL
-- );

-- create table menu_items (
--     item_id SERIAL PRIMARY KEY,
--     item_name VARCHAR(100) NOT NULL,
--     price int not null,
--     restaurant_id INT not null,

--     FOREIGN KEY (restaurant_id)
--     REFERENCES restaurants(restaurant_id)
-- );


-- create table delivery_person (
--     delivery_person_id SERIAL PRIMARY KEY,
--     partner_name VARCHAR(100) NOT NULL,
--     phone VARCHAR(15) NOT NULL,
--     vehicle VARCHAR(50) NOT NULL
-- );


-- create table orders (
--     customer_id INT not null,
--     order_id SERIAL PRIMARY KEY,
--     partner_id INT not null,
--     restaurant_id INT not null,
--     total_price int not null,
--     status VARCHAR(50) not null,

--     FOREIGN KEY (customer_id)
--     REFERENCES customers(customer_id),

--     FOREIGN KEY (partner_id)
--     REFERENCES delivery_person(delivery_person_id),

--     FOREIGN KEY (restaurant_id)
--     REFERENCES restaurants(restaurant_id)
-- );

-- create table order_items (
--     order_id INT not null,
--     item_id INT not null,
--     restaurant_id INT not null,
--     quantity int not null,

--     FOREIGN KEY order_id , item_id , restaurant_id
--     REFERENCES orders(order_id) , menu_items(item_id) , restaurants(restaurant_id)
-- );

-- create table payments (
--     payment_id SERIAL PRIMARY KEY,
--     customer_id INT not null,
--     mode VARCHAR(50) not null,
--     order_id INT not null,
--     amount int not null,
--     current_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

--     FOREIGN KEY customer_id,order_id
--     REFERENCES customers(customer_id), orders(order_id)
-- );



