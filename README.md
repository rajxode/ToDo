# ToDo
  A ToDo project made using Node, Express and TypeScript. Swagger-ui is used for api-docs and for Database MongoDB is used. User can add, remove and update todos. Also user can see the list of all the todos.

# Installation and Run:
  - Get the code on your system.
  - Open the terminal and navigate to the root directory of the project.
  - Inside terminal run command "npm install" to install all the dependencies.
  - After complete installation, create a '.env' file in root directory.
  - Inside the '.env' file declare following variables:
    - PORT : { PORT on which the server will run }
    - MONGO_URL : { url of MongoDB database }
  - After creating the '.env' file, again open terminal and navigate to the root directory of project.
  - To run the code, run command 'npm start'.
  - To see the output, open your web browser and serach for http://localhost:{your_port_number}

# Features:
  - See list of all the todos
  - Add a new todo.
  - Remove any todo by entering it's id.
  - Update any todo's status by entering id and new status.

# Tools used:
  - Nodejs
  - Express
  - TypeScript
  - MongoDB
  - Swagger-ui
