import crypto = require('crypto');

export class Hasher {

  getHash(object, Serializer) {
    let serialized = Serializer.serialize(object);
    let hasher = crypto.createHash('sha256');
    return hasher.update(serialized).digest('hex');
  }
}
