export const typeDefs = `
type Team{
  owner:User!,
  members:[User!]!
  channels:[Channel!]!,
  name:String!
}

type User{
  id:Int!,
  username:String!,
  email:String!,
  teams:[Team!]!
}

type Channel{
  id:Int!,
  name:String!,
  users:[User!]!,
  public:Boolean
}

type Mesage{
  id:Int!,
  text:String!,
  user:User!,
  Channel:Channel!
}
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;
