### CRUD API with Express and MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) API built using Express.js and MongoDB. It provides endpoints to manage products stored in a MongoDB database.

#### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally on port 27017
- Basic understanding of RESTful APIs, Express.js, and MongoDB

#### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git

2. Navigate to the project directory :
   
   cd your-repository
3. Install dependencies using npm 
    npm install

4. Start the server 
    npm start 

    Once the server is running, you can access the API at http://localhost:5000.

## Endpoints

GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve a specific product by its ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a product by its ID.
DELETE /api/products/:id: Delete a product by its ID.


## Example Usage
To retrieve all products: GET http://localhost:5000/api/products
To retrieve a specific product: GET http://localhost:5000/api/products/:id
To create a new product: POST http://localhost:5000/api/products
To update a product: PUT http://localhost:5000/api/products/:id
To delete a product: DELETE http://localhost:5000/api/products/:id

## Dependencies
Express.js: Web framework for Node.js
Mongoose: MongoDB object modeling for Node.js
Body-parser: Node.js body parsing middleware
