import { client } from "../database/db.js";


export const createUserTable=async () => {
    const query = `
    CREATE TABLE users (
        id int primary key,
        
        name varchar
   
    );
    `;
    try {
        const res = await client.query(query)
        console.log("Table created",res)
    } catch (error) {
        console.error(error)
    }
    
    
 }
 export const getUsers=async()=>{
    const query = `
   SELECT * FROM Users
    `;
    try {
        const res = await client.query(query)
        console.log("Table created",res)
    } catch (error) {
        console.error(error)
    }
 }