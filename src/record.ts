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

  compare(r1: Record, r2: Record) {
    let h1 = r1.getHash();
    let h2 = r2.getHash();
    if (h1 === h2) return 0;
    if (h1 > h2 ) return 1;
    else return -1;
  }
}

let r1 = new Record("test1");
let r2 = new Record("test2");
console.log(r1.compare(r1, r2));
