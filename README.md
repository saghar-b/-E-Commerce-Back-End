# 13 Object-Relational Mapping (ORM): E-Commerce Back End
### saghar behinaein
## Your Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Installation
Here are some guidelines to help you get started:

1. Clone the project in your laptop  
2. make sure you installed Node on your visual studio 
3.  Run the `npm init -y` comand in your terminal (your can see _package.json_ file in your folder)
4.  Run `npm install express mysql2 sequelize dotenv ` comand in your terminal to get all the libraries 
5.  create .env file and inter your information
 

6.  open terminl 
7. start the terminal from server.js
8.  run the `npm run schema` in terminal
9.  run the `npm run seed` in terminal
10. 6.  run the `node server.js`in terminal
11. start insomnia GET `localhost:3001/api/categories` and keep continue for the rest 

## Demo video
demo video is in the link beloow:
[Demo Link](https://drive.google.com/file/d/1kBW5EUJR5igYmSGVZGITp2NschweM2PX/view)

## my work
* by adding database name, MySQL username, and MySQL password to an environment variable file, then you able to connect to a database using Sequelize
*  enter schema and seed commands (npm run schema, npm run seed)
*  the database is created and is seeded with test data
*  by running the node server.js in terminal, server is started and the Sequelize models are synced to the MySQL database
* By opening API GET routes in Insomnia for categories, products, or tags then the data for each of these routes is displayed in a formatted JSON
* By testing API POST, PUT, and DELETE routes in Insomnia, then you able to successfully create, update, and delete data in my database

