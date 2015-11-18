module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mean-token-auth',
  SALT_WORK_FACTOR: 10,
  GITHUB_SECRET : "af0472cb7f5bd1694f09f1590fbe81eb5e9658c0"
};
