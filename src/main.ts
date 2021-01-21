import { Calculate } from "./calculate";
import { Email } from "./email";
import { Item } from "./item";



const user_1 = new Email("user_1@gmail.com");
const user_2 = new Email("user_2@gmail.com");
const user_3 = new Email("user_3@gmail.com");
const user_4 = new Email("user_4@gmail.com");

const pao = new Item("Pão de queijo", 1, 1.00);
const coca = new Item("Coca Cola", 1, 20.00);

const Items = [pao];
const Emails = [user_1, user_2, user_3];

//empty list
//const calc = new Calculate(Items, []);
//no empty list
const calc = new Calculate(Items, Emails);
console.log(calc.calculate());


