CREATE DATABASE crypto_app;

create extension if not exists "uuid-ossp";

CREATE TABLE users (
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  email VARCHAR(60) NOT NULL,
  password VARCHAR(60) NOT NULL,
  username VARCHAR(255),
  avatar VARCHAR(255),
  wallet_adress uuid DEFAULT 
  uuid_generate_v4() NOT NULL,
  investment NUMERIC NOT NULL,
  investment_items TEXT[],
  balance NUMERIC NOT NULL,
  created_at VARCHAR(20) NOT NULL,
  updated_at VARCHAR(20)
);

CREATE TABLE user_contact (
  contact_id SERIAL PRIMARY KEY, 
  email VARCHAR(60) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,  
  birthday_date DATE,
  user_id uuid NOT NULL,
  avatar VARCHAR(255),
  wallet_adress uuid DEFAULT
  uuid_generate_v4() NOT NULL,
  created_at VARCHAR(20) NOT NULL
);

CREATE TABLE user_bank_card (
  bank_card_id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  card_number VARCHAR(19) NOT NULL,
  card_date VARCHAR(19) NOT NULL,
  user_id uuid NOT NULL,
  created_at VARCHAR(20) NOT NULL
);

CREATE TABLE user_order (
  order_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_id uuid NOT NULL,
  status VARCHAR(150) NOT NULL,
  transaction_id VARCHAR(150) NOT NULL,
  wallet_adress VARCHAR(255) NOT NULL,
  created_at VARCHAR(20) NOT NULL
);

CREATE TABLE user_order_item (
  order_item_id SERIAL PRIMARY KEY,
  order_id uuid,
  crypto_name VARCHAR(100) NOT NULL,
  crypto_id_name VARCHAR(100) NOT NULL,
  amount_in_user_currency NUMERIC NOT NULL,
  amount_converted_in_coin NUMERIC NOT NULL
);

CREATE TABLE user_transfert (
  transfert_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_id uuid NOT NULL,
  status VARCHAR(150),
  tracking_id VARCHAR(150) NOT NULL,
  wallet_adress VARCHAR(255) NOT NULL,
  created_at VARCHAR(20) NOT NULL
);

CREATE TABLE user_transfert_item (
  transfert_item_id SERIAL PRIMARY KEY,
  transfert_id uuid NOT NULL,
  crypto_name VARCHAR(150) NOT NULL,
  crypto_id_name VARCHAR(100) NOT NULL,
  amount_in_user_currency NUMERIC NOT NULL,
  amount_converted_in_coin NUMERIC NOT NULL,
  description VARCHAR(255) NOT NULL,
  contact_id SERIAL NOT NULL,
  contact_wallet_adress VARCHAR(255) NOT NULL
);

  CREATE TABLE user_investment (
    investment_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_id uuid NOT NULL,
    status VARCHAR(150),
    investment_tracking_id VARCHAR(150) NOT NULL,
    wallet_adress VARCHAR(255) NOT NULL,
    created_at VARCHAR(20) NOT NULL,
    updated_at VARCHAR(20)
  );

  CREATE TABLE user_investment_item (
    investment_item_id SERIAL PRIMARY KEY,
    crypto_name VARCHAR(150) NOT NULL,
    crypto_id_name VARCHAR(100) NOT NULL,
    amount_in_user_currency NUMERIC NOT NULL,
    amount_converted_in_coin NUMERIC NOT NULL,
    total_amount_of_coin_in_user_currency NUMERIC NOT NULL,
    total_amount_of_converted_coin NUMERIC NOT NULL,
    investment_id uuid NOT NULL
  );


ALTER TABLE user_investment ADD FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;

ALTER TABLE user_investment_item ADD FOREIGN KEY (investment_id) REFERENCES user_investment (investment_id) ON DELETE CASCADE;

ALTER TABLE user_order ADD FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;

ALTER TABLE user_transfert ADD FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;

ALTER TABLE user_order_item ADD FOREIGN KEY (order_id) REFERENCES user_order (order_id) ON DELETE CASCADE;

ALTER TABLE user_transfert_item ADD FOREIGN KEY (transfert_id) REFERENCES user_transfert (transfert_id) ON DELETE CASCADE;

ALTER TABLE user_contact ADD FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;


insert into users (email, password, first_name, last_name, created_at) values ('dddtjessett0@xing.com', 'pg', 'Tobi', 'Jessett', '9/10/2021');

insert into user_contact (email, first_name, last_name, user_id, created_at) values ('mfarmer0@sbwire.com', 'Markos', 'Farmer', '8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', '8/20/2021');
insert into user_contact (email, first_name, last_name, user_id, created_at) values ('aconeron1@bizjournals.com', 'Aubrey', 'Coneron', '8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', '4/10/2021');
insert into user_bank_card (name, card_number, user_id, created_at) values ('CB PRO', '3548166136164250', '8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', '7/16/2021');
insert into user_bank_card (name, card_number, user_id, created_at) values ('CB PERSO', '3543763407634816', '8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', '8/13/2021');
insert into user_order (user_id, status, created_at) values ('8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', false, '10/8/2021');
insert into user_transfert (user_id, status, created_at) values ('8dc84cd8-4392-4ef9-8166-1be09c4aa1f5', true, '12/23/2020');
insert into user_order_item (order_id, crypto_name, amount) values ('10d2e277-c77d-4dbf-96d5-83a8d3e5492a', 'ETH', '150.52');

SELECT DISTINCT(
  users.email,
  users.first_name,
  users.last_name,
  user_order.order_id,
  user_transfert.transfert_id,
  user_order_item.crypto_name,
  user_order_item.amount
)
FROM users
INNER JOIN user_bank_card USING(user_id)
INNER JOIN user_order USING(user_id)
INNER JOIN user_transfert USING(user_id)
INNER JOIN user_order_item USING(order_id)
WHERE user_id ='8dc84cd8-4392-4ef9-8166-1be09c4aa1f5'
AND   order_id = '10d2e277-c77d-4dbf-96d5-83a8d3e5492a';

