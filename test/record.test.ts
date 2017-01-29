import { Expect, Test } from "alsatian";
import { Record } from "../src/record";

export class RecordTests {
    @Test()
    public instantiateClassWithoutError() {
        Expect(() => new Record("Test")).not.toThrow();
    }
}