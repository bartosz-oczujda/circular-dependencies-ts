class Tester {

    public test() {
        let cls = new TesterSubclass();
        console.log("Initialized with circular dependency")
        console.log(cls.getNum())
    };

    public getNum() {
        return 1
    }
}

import { TesterSubclass } from "./TesterSubclass";
export { Tester }