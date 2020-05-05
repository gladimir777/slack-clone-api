export default `
type User {
    id:Int!,
    username:String!,
    email:String!,
    teams:[Team!]!
  }

  type Query { 
      getUser(id: Int!): User! 
      allUsers:[User!]!
     }

     type Mutation { 
        createUser(userName: String!,email: String!,passworsd: String!): User! 
       }
  `;
