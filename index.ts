
// express 
import express , { Express } from 'express';
// for environment variables
import dotenv from 'dotenv';
// for swagger docs
import swaggerUi from 'swagger-ui-express';
// for writing swagger docs 
import YAML from 'yamljs';
// function to connect with DB
const connect = require('./dbConfig/mongoose');

// env variables
dotenv.config();

// app from express
const app : Express = express();
// port
const PORT = process.env.PORT;


// connect with DB
connect();

// swagger file
const swaggerDocument = YAML.load('./swagger.yaml')

// rendering the swagger file
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// middlewares for json and url data
app.use(express.json());
app.use(express.urlencoded(
    {
        extended:true
    }
));

// for routes files
app.use('/',require('./routes/index'));

// fire up the server
app.listen(PORT,() => console.log(`server running on port: ${PORT}`));