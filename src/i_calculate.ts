import { Email } from "./email";
import { Item } from "./item";

export abstract class ICalculate {
    abstract calculate(): Map<string, Number>;
}