import { client } from "../DataBase/connection";
import { userModel } from "../models/userModel";


//Retornar todos os usuários
export const getAllUsers = async ()=>{
    let data = null
    try {
        data = (await client.query('select * from usuarios')).rows
    } catch (error) {
        console.log('Algo deu errado -> '+error)
    }
    
    return data
}

//Retornar um usuário específico pelo ID
export const getUserByIdService = async (id:number)=>{
    const sqlQuery = `select * from usuarios where id=${id}`
    try{
        const result = (await client.query(sqlQuery)).rows
        if(result.length==0){
            return {message:"Não foi encontrado nenhum usuário com este id"}
        }else{
            return result
        }
    }catch(error){
        return error
    }
}

//Insere um novo usuário no banco de dados
export const createUserService = async (info:userModel)=>{
    const sqlQuery = `insert into usuarios(nome, email, password) values($1,$2,$3)`
    try {
        const result = await client.query(sqlQuery,[info.nome,info.email,info.password])
        return {messagem:`Usuário ${info.nome} inserido com sucesso`}
    } catch (error) {
        return {messagem: `Algo deu errado -> ${error}`}
    }
}

//Atualiza as dados de um usuário no banco de dados
export const updateUserByIdService = async (id:number, info:any) => {
    let updates = []
    if (info.nome) {
        updates.push(`nome = '${info.nome}'`)
    }
    if (info.email) {
        updates.push(`email = '${info.email}'`)
    }

    const sqlQuery = `update usuarios set ${updates.join(', ')} where id = ${id}`

    try {
        const result = await client.query(sqlQuery)
        return {message: "Usuário atualizado com sucesso"}
    } catch (error) {
        return {messagem: `Erro ao atualizar usuário -> ${error}`}
    }

}

//Deletar usuário pelo ID
export const deleteUserByIdService = async (id:number)=>{
    
    const sqlQuery = `delete from usuarios where id = ${id}`

    try {
        const result = await client.query(sqlQuery)
        return {message: `Usuário de id = ${id} foi deletado com sucesso`}
    } catch (error) {
        return {messagem: `Erro ao deletar usuário -> ${error}`}
    }
}