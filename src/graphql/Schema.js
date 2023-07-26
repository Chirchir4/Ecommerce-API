 export const typeDefs= `#graphql
 type User{
    id:Int,
    name:String,
    cart:[Cart!],

 }
 type Product{
    id:Int,
    name:String,
    description:String,
    image:String,
    price:Float,
    category:Category
    
 }
 type Cart{
    id:Int,
    state:Boolean,
    products: [Product!]!

 }

 type Category{
        id: ID!
        name: String!
        products: [Product!]!
    }
 `