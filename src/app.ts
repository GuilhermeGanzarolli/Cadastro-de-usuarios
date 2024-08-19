import cors from "cors"
import express from "express"
import {router} from "./routes"

export function createApp(){
    const app = express()

    const corsOptions = {
        origin:[],
        methods: []
    }

    app.use(express.json())
    app.use(router)
    app.use(cors())

    return app
}

