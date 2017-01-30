import 'mocha';
import { expect } from 'chai';
import { Record } from '../src/record';
import { Hasher } from '../src/hasher';
import Serializer = require('../src/serializer');


describe('record', () => {
    it('should instantiate without error', () => {
        expect(new Record("Test")).instanceOf(Record);
    });

    it('should get the correct hash using hasher', () => {
        let test_val = new Hasher().getHash('Test',Serializer);
        expect(new Record("Test").getHash()).equals(test_val);
    });
});