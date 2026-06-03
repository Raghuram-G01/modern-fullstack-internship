-- -- 1nf:
-- create table students(
--     student_id serial primary key,
--     name varchar(50) not null,
--     courses varchar(100) not null
-- );

-- insert into students(name, courses) values ('Alice', 'Math, Science'), ('Bob', 'History, Art');
-- select * from students;

-- -- solution:

-- insert into students(name, courses) values ('Alice', 'Math'), ('Alice', 'Science'), ('Bob', 'History'), ('Bob', 'Art');


-- drop table students;
-- -- 2nf:
-- create table students(
--     student_id serial primary key,
--     name varchar(50) not null,
--     courses varchar(50) not null
-- );

-- insert into students(name, courses) values ('Alice', 'Math'), ('Alice', 'Science'), ('Bob', 'History'), ('Bob', 'Art');
-- select * from students;


-- task : er diagram for student , course enrollment

create table courses(
    course_id serial primary key,
    course_name varchar(50) not null
);
create table students(
    student_id serial primary key,
    name varchar(50) not null,
    course_id int references courses(course_id)
);


insert into courses(course_name) values ('Math'), ('Science'), ('History'), ('Art');
insert into students(name, course_id) values ('Alice', 1), ('Alice', 2), ('Bob', 3), ('Bob', 4);
select * from students;
select * from courses;