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
    user_id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(355) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP NOT NULL
);

INSERT INTO account (user_id, username, password, email, first_name, last_name, created_on, last_login)
VALUES (1, 'test', 'test', 'test@test.com', 'test', 'test', now(), now());

SELECT datname FROM pg_database;