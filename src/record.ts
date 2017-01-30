import { Hasher } from "./hasher";
import Serializer = require('./serializer');
export class Record {

  constructor(public blob: String) { }

  getHash() {
    let hasher = new Hasher();
    return hasher.getHash(this.blob, Serializer);
  }

  compare(r2: Record) {
    let h1 = this.getHash();
    let h2 = r2.getHash();
    if (h1 === h2) return 0;
    if (h1 > h2 ) return 1;
    else return -1;   
  } 
}

