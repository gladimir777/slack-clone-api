export default `
type Mesage {
  id:Int!,
  text:String!,
  user:User!,
  Channel:Channel!
}
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;
