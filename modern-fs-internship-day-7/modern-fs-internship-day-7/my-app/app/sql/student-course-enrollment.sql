CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    department VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    credits INT CHECK (credits > 0)
);


CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,

    FOREIGN KEY (student_id)
    REFERENCES students(student_id),

    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);


INSERT INTO students(student_name, department, email)
VALUES
('Prince Benjamin', 'CSE', 'prince@gmail.com'),
('Nishanth', 'ECE', 'nishanth@gmail.com'),
('Pradeep', 'IT', 'pradeep@gmail.com'),
('Puviarasu', 'CSE', 'puvi@gmail.com');


INSERT INTO courses(course_name, credits)
VALUES
('Database Management System', 4),
('Data Structures', 3),
('Operating Systems', 4),
('Computer Networks', 3);


INSERT INTO enrollments(student_id, course_id, enrollment_date)
VALUES
(1,1,'2026-06-02'),
(1,2,'2026-06-02'),
(2,3,'2026-06-02'),
(3,1,'2026-06-02'),
(4,4,'2026-06-02');

SELECT * FROM students;

SELECT * FROM courses;

SELECT * FROM enrollments;


SELECT
    s.student_name,
    c.course_name,
    e.enrollment_date
FROM enrollments e
JOIN students s
ON s.student_id = e.student_id
JOIN courses c
ON c.course_id = e.course_id;



-- online food ordering system
-- 1. customers
-- 2. restaurants
-- 3. menu_items
-- 4. orders
-- 5. delivery_persons
-- 6. payments

-- college library management system
-- 1. students
-- 2. books
-- 3. borrow_records
-- 4. librarians
-- 5. authors


-- movie ticket booking system
-- 1. movies
-- 2. theaters
-- 3. show
-- 4. customers
-- 5. bookings
-- 6. seats


-- gym management system
-- students expense tracker



