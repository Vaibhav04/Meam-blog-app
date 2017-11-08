const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://vaibhav:htcd816@ds249355.mlab.com:49355/angular-2-blog-app', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'angular-2-blog-app' // Database name
}
