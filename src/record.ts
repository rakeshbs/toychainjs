import { Hasher } from "./Hasher";
import Serializer = require('./serializer');
export class Record {

  blob: String;

  constructor(_blob: String) {
    this.blob = _blob;
  }

  getHash() {
    let hasher = new Hasher();
    return hasher.getHash(this.blob, Serializer);
  }
}
