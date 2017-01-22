import crypto = require('crypto');
let hasher = crypto.createHash('sha256');

export class Hasher {

  hash(object, Serializer) {
    let serialized = Serializer.serialize(object);
    return hasher.digest(serialized);
  }
}
