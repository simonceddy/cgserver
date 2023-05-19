/* eslint-disable import/no-extraneous-dependencies */
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
// const passport = require('passport');

// TODO actual User
const User = {
  findOne(_params, callback = null) {
    if (callback) callback(null, true);
  }
};

/**
 * Init passport strategy
 * @param {import('passport')} passport App passport
 */
function initStrategy(passport) {
  const opts = {};

  // TODO
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'secret';
  opts.issuer = 'cool.thing.com';
  opts.audience = 'localhost';

  passport.use(new JWTStrategy(opts, ((jwtPayload, done) => {
    // TODO setup user
    // TODO validate password
    User.findOne({ id: jwtPayload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })));

  return passport;
}

module.exports = initStrategy;
