import crypto = require('crypto');
import Serializer = require('./serializer');

export class Hasher {

  getHash(object, Serializer) {
    let serialized = Serializer.serialize(object);
    let hasher = crypto.createHash('sha256');
    return hasher.digest(serialized);
  }
}
