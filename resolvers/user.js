export default {
  Query: {
    getUser: (parent, { id }, { models }) => models.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.findAll(),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.create(args),
  },
};
