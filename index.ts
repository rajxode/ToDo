
import express , { Express } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const connect = require('./dbConfig/mongoose');

dotenv.config();
const app : Express = express();

connect();

const swaggerDocument = YAML.load('./swagger.yaml')
// rendering the swagger file
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT;

app.use('/',require('./routes/index'));

app.listen(PORT,() => console.log(`server running on port: ${PORT}`));