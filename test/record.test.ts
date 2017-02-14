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

    it('should provide the correct comparison', () => {
        expect(new Record("Test").compare(new Record("Test1"))).equals(1);  
        expect(new Record("Test1").compare(new Record("Test"))).equals(-1);
        expect(new Record("Test").compare(new Record("Test"))).equals(0);
    } );
});