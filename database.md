* Table DB

# Products
- id PK - INT - AI
- name VARCHAR (255) - NN
- description TEXT - N
- price DECIMAL (6,2) - NN
- cover_image VARCHAR (255) - N
- promotion BOOLEAN DEFAULT(0)
- available BOOLEAN DEFAULT(0)
- created_at DATETIME
- updated_at DATETIME

# Images
- id PK - INT - AI
- product_id FK - INT
- image_url VARCHAR (255) - N
- alt_text VARCHAR (255) - N
- created_at DATETIME

# Tags
- id PK - INT - AI
- name VARCHAR (255) - NN
- icon VARCHAR (255) - NN
- created_at DATETIME
- updated_at DATETIME

# Categories
- id PK - INT - AI
- name VARCHAR (255) - NN
- created_at DATETIME
- update_at DATETIME

# Reviews
- id PK - INT - AI
- title VARCHAR (255) - NN
- vote TINYINT (5) - UN - NN
- review TEXT - NN
- author VARCHAR(100)
- product_id FK
- created_at DATETIME
- update_at DATETIME

# Customers
- id PK - INT - AI
- name VARCHAR (255) - NN
- lastname VARCHAR (255) - NN
- phone_number VARCHAR(20) - N
- email VARCHAR(100) - NN
- address VARCHAR(100) - NN
- cap MEDIUM INT - UN - NN
- city VARCHAR(100) - NN
- province VARCHAR(100) - NN
- country VARCHAR(100) - NN
- created_at DATETIME
- update_at DATETIME

# Orders
- id PK - INT - AI
- customer_id FK
- order_number INT - AI - UN
- created_at DATETIME
- update_at DATETIME


# Pivot

# Category_product
- id PK - INT - AI
- categoriy_id FK
- product_id FK

# Product_tag
- id PK - INT - AI
- product_id FK
- tag_id FK

# Order_product
- id PK - INT - AI
- order_id FK
- product_id FK
- total_price DECIMAL(7,2)
- quantity SMALLINT
