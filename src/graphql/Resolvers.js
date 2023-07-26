import { getUsers } from "../utils.js"


export const resolvers={
Query:{
    User:()=>getUsers()
}
  
}