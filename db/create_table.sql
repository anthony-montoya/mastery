CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(80),
    email VARCHAR(100),
    img TEXT,
    auth_id text
);

-- Selecting datatypes when creating a database schema is important. The way I was able to come up with these data types for this users table was:
-- First of all, I create a unique identifier key that is able to increment each time something is inserted into this table. I used the integer serial primary key.
-- This helps keep each entry unique and organized. The username was given a varchar of 80 characters to prevent spamming a username and having a 
-- extremely long text username stored in my database, so I figure 80 characters for a username is more than enough. Same reasoning behind the email varchar.
-- Img i use plain text as its easier to store an IMG url using a string and takes up less space. Auth_id is also a string as it is unique and the length
-- is not something I can be in control of.

