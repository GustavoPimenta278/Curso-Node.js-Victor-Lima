const express = require("express")
const app = express()

class serverFunctions {
    constructor (serverPort) {
        this.port = serverPort
    }


    openServer (serverPort) {
        console.log(`Opening server at ${this.port} port`)
        //opening server with Express

        try {
            app.listen(this.port)
            app.get("/", (req, res) => {res.send(`Server opened.`)})
            console.log(`Server opened in url https://localhost:${this.port}`)
            
        } catch (error) {
            throw new Error(`Não foi possivel abrir o servidor na porta ${this.port}`)
        }

        app.get("/", (req, res) => {res.send(`Server opened.`)})

    }


    createPage = (pageName) => {
        app.get(`/${pageName}`, (req, res) => {
            res.send(`Page <b> ${pageName}</b> has Created!`)
        })
    }
    
}




const serverIndex = new serverFunctions("8093");


serverIndex.openServer()
serverIndex.createPage("About")
serverIndex.createPage("home")


