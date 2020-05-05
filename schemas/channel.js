export default `
type Channel {
    id:Int!,
    name:String!,
    users:[User!]!,
    public:Boolean
  }
  `;
