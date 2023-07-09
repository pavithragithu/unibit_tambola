# TambolaTicket
💀 TechStack : Express js , MongoDb

Packages Use :
🐼bcrypt : bcrypt is a popular library used for password hashing in Node.js applications. It provides a secure way to store passwords by hashing them with a salt value, making them resistant 
            to password cracking attacks.

🐼dotenv : dotenv is a popular library used in Node.js applications to manage environment variables. It provides an easy way to load and access environment-specific configuration values from a .env file.

🐼express : Express is a popular web application framework for Node.js. It provides a set of tools and features that make it easier to build robust and scalable web applications.

🐼jsonwebtoken : jsonwebtoken is a library used for generating and validating JSON Web Tokens (JWTs) in Node.js applications. JWTs are a compact and self-contained way to securely transmit information
                  between parties as a JSON object.

🐼 mongoose : Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It provides a simple and elegant way to interact with MongoDB and define data models using schemas.

🐼 nodemon : nodemon is a development tool for Node.js applications that automatically restarts the server whenever a file changes. It helps streamline the development process by eliminating the need to manually
              stop and restart the server after making code changes.


🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞
1 . 👀 First, the user needs to register. To register, you must provide a unique username and a password with a length greater than or equal to 8 and less than 16 characters.



![registerUser](https://github.com/102AMIT/TambolaTicket/assets/96186566/4a817ae7-9122-4eb5-b748-5f09eecc5765)


2. 👀  Once registered, you can log in using the same username and password.


![loginUser](https://github.com/102AMIT/TambolaTicket/assets/96186566/305206d6-05bc-4785-addb-9a1c7687e6ca)


3. 👀 After successful login, you can create tickets. To create tickets, you need to provide a valid JWT token obtained during the login process. In the request body, include the userId
   associated with the user and the numberOfTicketSet. Each set contains 6 tickets, so if you pass 2 as numberOfTicketSet, you will receive a total of 12 tickets, separated into sets.


 
![create ticket ](https://github.com/102AMIT/TambolaTicket/assets/96186566/06a11d91-a12a-4f15-8c15-3e9835798dda)






4. 👀 Finally, you can fetch all the tickets associated with a specific userId. Include the userId in the request parameters. Additionally, you can provide the skip and page parameters for
    pagination purposes, as per your requirements.
![fetch ticket](https://github.com/102AMIT/TambolaTicket/assets/96186566/79eaf3dd-4dc9-4554-8be2-41dd4d21d038)
