CREATE ROLE foodplanner;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT,INSERT,UPDATE ON TABLES TO foodplanner;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO foodplanner;

CREATE USER test;
ALTER USER test PASSWORD 'test';
GRANT foodplanner TO test;

ALTER USER test WITH SUPERUSER LOGIN;

-- CREATE DATABASE foodpl
-- WITH
-- OWNER = test
-- ENCODING = 'UTF8'
-- TABLESPACE = pg_default
-- CONNECTION_LIMIT = -1;

CREATE TABLE account(
    id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    email VARCHAR(355) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    patient_id VARCHAR(50),
    allergies VARCHAR(500),
    conditions VARCHAR(500)
);

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (1, 'test', 'test', 'johndoe@test.com', 'John', 'Doe', '12345', 'Shrimp', 'Heartburn');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (2, 'emilywatson', 'password', 'emilywatson@test.com', 'Emily', 'Watson', '23456', 'Shrimp', 'Heartburn');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (3, 'smithensdonald', 'password', 'smithensdonald@test.com', 'Smithens', 'Donald', '30116', 'Dairy,Gluten,Egg', 'Diabetes');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (4, 'smithjohn', 'password', 'smithjohn@test.com', 'Smith', 'John', '42221', 'Dairy,Gluten,Egg', 'Diabetes');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (5, 'smitheringjohn', 'password', 'smitheringjohn@test.com', 'Smithering', 'John', '96492', 'Peanut,Sesame', 'Fatigue');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (6, 'smithjane', 'password', 'smithjane@test.com', 'Smith', 'Jane', '1426955', 'Shellfish,Wheat', 'Headaches');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (7, 'luisperez', 'password', 'luisperez@test.com', 'Luis', 'Perez', '1565595', 'Grain,Soy', 'Fatigue,Headaches');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (8, 'estudianteespinosa', 'password', 'estudianteespinosa@test.com', 'Estudiante', 'Espinosa', '1970569', 'Penicillin', '');

INSERT INTO account (id, username, password, email, first_name, last_name, patient_id, allergies, conditions)
VALUES (9, 'luismadrid', 'password', 'luismadrid@test.com', 'Luis', 'Madrid', '2508342', 'Penicillin', 'Fever,Rash');

alter sequence account_id_seq restart with 10;
