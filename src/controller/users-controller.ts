import { Request, Response } from "express";
import { getAllUsers, getUserByIdService } from "../services/userServices";

export const getUsers = async (request:Request, response:Response)=> {

    const httpResponse = await getAllUsers()

    response.json(httpResponse)
}

export const getUserById = async (request:Request, response:Response)=> {
    const id = parseInt(request.params.id)
    const httpResponse = await getUserByIdService(id)

    response.json(httpResponse)
}