const express = require('express')
const app = express()

// connecting database MySql with Sequelize 
const Sequelize = require('sequelize')

// paramns: ('database name', 'database user', 'database password', 
    //'{host:"addres or localhost", dialect: 'your database type mysql'}')
const sequelize = new Sequelize('DB_Usuarios', 'root', 'E$mer@ld@06', {
    host: "localhost",
    dialect: 'mysql'
})


sequelize.authenticate().then(
    () => {console.log("Database connected!")}
).catch(
    (err) => {
        console.log(`Falha ao se conectar com o banco de dados: ${err}`)
    }
)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})


app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/about.html`)
})











app.listen(9023, () => {console.log("Server Running!")})