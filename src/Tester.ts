//import { TesterSubclass as Sub } from "./TesterSubclass";

declare function require(moduleName: string): any;

class Tester {

    public test() {
        let TesterSubclass = require("./TesterSubclass");
        let cls = new TesterSubclass();
        console.log("Initialized with circular dependency")
        console.log(cls.getNum())
    };

    public getNum() {
        return 1
    }
}

export { Tester }