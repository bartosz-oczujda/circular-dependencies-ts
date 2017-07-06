import { ITester } from "./ITester"
import { Tester } from "./Tester"
import { TesterSubclass } from "./TesterSubclass"

class Injector {

    static tester
    static testerSub

    static getTester(): ITester {
        if(!this.tester) this.tester = new Tester()
        return this.tester
    }

    static getTesterSubclass(): ITester {
        if(!this.testerSub) this.testerSub = new TesterSubclass()
        return this.testerSub
    }

}

export { Injector }