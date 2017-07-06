import { Injector } from "./Injector";
import { ITester } from "./ITester";

class Tester implements ITester {

    public test() {
        let cls = Injector.getTesterSubclass()
        console.log("Initialized with circular dependency")
        console.log(cls.getNum())
    };

    public getNum() {
        return 1
    }
}

export { Tester }