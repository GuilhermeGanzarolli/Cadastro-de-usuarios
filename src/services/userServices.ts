import { client } from "../DataBase/connection";
import { userModel } from "../models/userModel";

export const getAllUsers = async ()=>{
    let data = null
    try {
        data = (await client.query('seletc * from usuarios')).rows
    } catch (error) {
        console.log('Algo deu errado -> '+error)
    }
    
    return data
}

export const getUserByIdService = async (id:number)=>{
    console.log(id)
}