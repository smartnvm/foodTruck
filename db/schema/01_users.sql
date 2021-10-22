-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS items_orders CASCADE;
-- DROP TABLE IF EXISTS widgets CASCADE;


CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(32)  NOT NULL,
  email VARCHAR(255)
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  order_no VARCHAR(10) NOT NULL,
  order_time  timestamp NOT NULL,
  order_note text,
  estimated_time  integer,
  completed_time   timestamp,
  completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  cal INTEGER NOT NULL,
  url VARCHAR(255) NOT NULL,
  price INTEGER  NOT NULL DEFAULT 0

);
CREATE TABLE items_orders(
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity INTEGER  NOT NULL DEFAULT 0

);
