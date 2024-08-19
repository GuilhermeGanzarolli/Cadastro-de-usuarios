import express from "express"
import { client } from "./DataBase/connection"
import { createApp } from "./app"

const app = createApp()

const server_port = process.env.PORT

app.listen(server_port, ()=>{
    console.log(`Servidor inicializado na porta ${server_port}`)
})


client.connect()