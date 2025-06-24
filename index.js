const express = require('express');
const todoRoutes = require('./routers/todorouters');
const bookstoreroutes = require('./routers/bookstorerouters')

const app = express();

app.use(express.json());   

app.use('/', todoRoutes);
app.use('/',bookstoreroutes);

app.listen(3000, () => console.log("Todo App running on port 3000"));
