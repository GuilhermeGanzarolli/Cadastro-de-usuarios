import { request, Request, Response } from "express";
import * as s from "../services/userServices";

export const getUsers = async (request:Request, response:Response)=> {

    const httpResponse = await s.getAllUsers()

    response.json(httpResponse)
}

export const getUserById = async (request:Request, response:Response)=> {
    const id = parseInt(request.params.id)
    const httpResponse = await s.getUserByIdService(id)

    response.json(httpResponse)
}


export const createUser = async (request: Request, response:Response)=>{
    const informacoes = request.body
    
    const httpResponse = await s.createUserService(informacoes)
    response.json(httpResponse)
}

export const updataUserById = async (request:Request, response:Response) => {
    const id = parseInt(request.params.id)
    const info = request.body
    const httpResponse = await s.updateUserByIdService(id, info)
    response.json(httpResponse)
}

export const delteUserById = async (request:Request, response:Response) => {
    const id = parseInt(request.params.id)
    
    const httpResponse = await s.deleteUserByIdService(id)
    response.json(httpResponse)
}