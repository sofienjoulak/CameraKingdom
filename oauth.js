var ids = {
  facebook: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
     profileFields: ['id', 'displayName', 'photos', 'email', 'username']
  },
  github: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  google: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};

module.exports = ids;