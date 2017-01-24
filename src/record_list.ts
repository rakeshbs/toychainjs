import { Record } from './record'

export class RecordList {

  records: Array<Record> = [];

  constructor(blobs: Array<String>) {
    blobs.forEach ( element => {
      let record = new Record(element);
      this.records.push(record);
    });

    this.records.sort(this.compare);
  }

  addBlob(blob) {
    let record = new Record(blob);
    this.records.push(record);
    this.records.sort(this.compare);
  }

  atIndex(index) {
    return this.records[index];
  }

  compare(r1: Record, r2: Record) {
    return r1.compare(r2);
  }
}

let rl = new RecordList(["1", "2"]);
rl.addBlob("1");
rl.addBlob("2");
console.log(rl.atIndex(1));
