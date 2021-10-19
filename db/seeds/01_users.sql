-- categories table seeds here (Example)
INSERT INTO users (name) VALUES ('Alice');
INSERT INTO users (name) VALUES ('Kira');



INSERT INTO categories (name) VALUES ('appetizer');
INSERT INTO categories (name) VALUES ('soup');
INSERT INTO categories (name) VALUES ('salad');
INSERT INTO categories (name) VALUES ('beef');
INSERT INTO categories (name) VALUES ('poultry');
INSERT INTO categories (name) VALUES ('kids');
INSERT INTO categories (name) VALUES ('deserts');
INSERT INTO categories (name) VALUES ('drinks');



insert into  items ( description, price, url, category_id)
values ('food item 1', 765, '/images/img_1.jpeg', 1),
('food item 2', 1511, '/images/img_1.jpeg', 1),
 ('food item 3', 1211, '/images/img_2.jpeg', 1),
 ('food item 4', 1311, '/images/img_3.jpeg', 1),
 ('food item 5', 1321, '/images/img_4.jpeg', 2),
 ('food item 6', 1851, '/images/img_5.jpeg', 1),
 ('food item 7', 1112, '/images/img_6.jpeg', 4),
 ('food item 8', 1654, '/images/img_7.jpeg', 1),
 ('food item 9', 1112, '/images/img_8.jpeg', 1),
 ('food item 11', 151, '/images/img_91.jpeg', 5),
 ('food item 11', 1842, '/images/img_11.jpeg', 1),
 ('food item 12', 1112, '/images/img_11.jpeg', 1),
 ('food item 13', 1521, '/images/img_12.jpeg', 1);
