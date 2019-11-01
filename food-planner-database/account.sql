CREATE TABLE account(
    user_id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(355) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP NOT NULL
);

CREATE USER test WITH PASSWORD 'test';

INSERT INTO account (user_id, username, password, email, first_name, last_name, created_on, last_login)
VALUES (1, 'test', 'test', 'test@test.com', 'test', 'test', now(), now());
