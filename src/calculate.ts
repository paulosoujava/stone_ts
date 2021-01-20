import { Email } from './email';
import { Item } from './item';
import { ICalculate } from './i_calculate';

export class Calculate implements ICalculate {

    private readonly dividedValue = new Map<string, Number>();
    private readonly _items: Item[];
    private readonly _emails: Email[];
    private _total: number = 0;

    constructor(items: Item[], emails: Email[]) {
        this._items = items;
        this._emails = emails;
    }
    calculate(): Map<string, Number> {

        // calculate item
        this._items.forEach((v) => {
            this._total += v.getQtd() * v.getValue()
        });
        console.log(`TOTAL DA CONTA ${this._total}`);

        var qtdToPay = parseFloat((this._total / this._emails.length).toFixed(2))

        for (var i = 0; i < this._emails.length; i++) {
            if (this._emails.length % 2 != 0 && qtdToPay % 2 != 0) {
                if (i == (this._emails.length - 1)) {
                    if (parseFloat((this._total - (qtdToPay * this._emails.length)).toFixed(2)) >= 0) {
                        qtdToPay += 0.01;
                    } else {
                        qtdToPay -= 0.01;
                    }
                }
            }
            console.log(this._emails[i].getEmail());
            this.dividedValue.set(this._emails[i].getEmail(), qtdToPay);
        }
        return this.dividedValue;
    }


}