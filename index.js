import express from "express";
import connect from './config/mongoose.js'
import router from './routes/index.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// middleware
app.use(express.json({limit: '50mb'}));

// It typically contains information about the technology stack or framework used to build the application. For example, 
// it might indicate that the server is running on Express or any other specific framework.
app.disable('x-powered-by');// less hackers know about our stack (Remove the X-Powered-By headers);

const port = process.env.PORT || 8000;

 
// api routes 
app.use('/', router);

// Error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
});

// start server only we have database valid connection 
connect()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        throw new Error("Error in Backend server start");
      }
      console.log(`Server connected to port: ${port}`);
    });
  })
  .catch((err) => {
    throw new Error(`Invalid database connection... ${err}`);
  });



