
import debug from 'debug';

const logger = debug('breakfast:storeLocals');

export default function storeLocals(app) {
  return function (req, res, next) {
    res.locals.node_env = process.env.NODE_ENV;
    res.locals.user = req.user;
    res.locals.s3_bucket = process.env.S3_BUCKET || '';
    res.locals.gitHash = app.get('gitHash');

    res.locals.oktaLogin = process.env.OKTA_LOGIN_LINK;
    next();
  };
}
