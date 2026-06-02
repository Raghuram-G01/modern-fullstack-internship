create table Ratings(
    id serial primary key,
    username varchar(255) not null,
    email varchar(255) not null,
    review text not null,
    ratings int not null,
    created_at timestamp default current_timestamp
);
insert into Ratings (username, email, review, ratings) values
('Alice', 'alice@gmail.com', 'Great product! Highly recommend it.', 5);

