import { Injector } from "./Injector";

let test = Injector.getTester()
let testSubclass = Injector.getTesterSubclass()
test.test();
