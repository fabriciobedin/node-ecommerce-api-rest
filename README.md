# Simple ecommerce API using NodeJS.

## Technologies
> nodejs, express, mongoose, bcrypt, jsonwebtoken, multer, body-parser, morgan, nodemon...

## Endpoints
|METHOD |ENDPOINT                |DESCRIPTION                         
|-------|------------------------|-----------------------------
|POST   |/user/signup            |create a new user            
|POST   |/user/login             |create a token by user and password            
|DELETE |/user/:userId           |remove user by id
|||
|GET    |/products               |get a list of products
|POST   |/products               |create a new product
|GET    |/products/:productId    |get product by product id
|PATCH  |/products/:productId    |edit product by product id
|DELETE |/products/:productId    |remove product by product id
|||
|GET    |/orders                 |get a list of orders
|POST   |/orders                 |create a new order
|GET    |/orders/:orderId        |get order by order id
|DELETE |/orders/:orderId        |remove order by order id
