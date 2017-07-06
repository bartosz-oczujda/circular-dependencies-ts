import { Tester } from "./Tester";

class TesterSubclass extends Tester {
    
    test() {
        console.log("Test from a subclass");
    }

    getNum(): number {
        return 33
    }
}

export { TesterSubclass }