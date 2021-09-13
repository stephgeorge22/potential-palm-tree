const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ })
                    .select('-__v -password')
                    .populate('books');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    }
};

module.exports = resolvers;