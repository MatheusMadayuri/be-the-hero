const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');   /**Vai criar 4 caracteres aleatórios e converter em tipo hexadecimal */
}