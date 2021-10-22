DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  time  Date  NOT NULL,
  estimated_time  time NOT NULL,
  completed_time   time NOT NULL,
  complete BOOLEAN NOT NULL DEFAULT TRUE,
);
