declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import * as Subclass from "./TesterSubclass";

class Tester {

    public test() {

        require(["./TesterSubclass"], (TesterSubclass: typeof Subclass) => {
            let testerInitialized = new TesterSubclass.TesterSubclass()
            console.log("Initialized with circular dependency")
            console.log(testerInitialized.getNum())
        })

        
    };

    public getNum() {
        return 1
    }
}

export { Tester }