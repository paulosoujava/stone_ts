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

        if (this._validateList()) {
            console.log(
                "Ops nobody has money"
            );

            return this.dividedValue;
        }

        // calculate item
        this._items.forEach((v) => {
            this._total += v.getQtd() * v.getValue()
        });

        var qtdToPay = parseFloat((this._total / this._emails.length).toFixed(2))

        for (var i = 0; i < this._emails.length; i++) {
            console.log(this._emails[i].getEmail());
            this.dividedValue.set(this._emails[i].getEmail(), this._centavos(qtdToPay, i));
        }
        return this.dividedValue;
    }

    _centavos(qtdToPay: number, i: number): number {
        if (this._emails.length % 2 != 0 && qtdToPay % 2 != 0) {
            if (i == (this._emails.length - 1)) {
                if (parseFloat((this._total - (qtdToPay * this._emails.length)).toFixed(2)) >= 0) {
                    qtdToPay += 0.01;
                } else {
                    qtdToPay -= 0.01;
                }
            }
        }
        return qtdToPay;
    }
    _validateList() {
        return this._emails.length == 0;
    }
}