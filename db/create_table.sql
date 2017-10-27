CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(80),
    email VARCHAR(100),
    img TEXT,
    auth_id text
);

